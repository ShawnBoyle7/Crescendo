import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";
import "./AudioPlayer.css"

const AudioPlayer = ({ nowPlaying, isPlaying, setIsPlaying }) => {
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.1)
    const [previousVolume, setPreviousVolume] = useState(0)

    // Essentially establishing state variables for objects, keeping reference to them on re-render.
    const audioElement = useRef();
    const progressBar = useRef();
    const volumeBar = useRef();
    const animationRef = useRef();

    const playPauseCallback = () => {
        updateCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    // If the audio element loaded the mp3 file, set the duration state variable and progress bar max value to the length of it
    useEffect(() => {
        const seconds = Math.floor(audioElement?.current?.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;
        audioElement.current.volume = volume
        
        audioElement.current.addEventListener("play", playPauseCallback)
        audioElement.current.addEventListener("pause", playPauseCallback)

        // setNowPlaying(audioElement.current.songUrl)
    }, [audioElement?.current?.loadedmetadata, audioElement?.current?.readyState])

    // Convert current time or duration to a rounded format for rendering
    const calculateTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);

        if (secs < 10) {
            secs = "0" + secs;
        }
    
        return `${minutes}:${secs}`
    }
    
    // I use this to update the current time state variable and the rendered current time of the progress bar when the progress bar value changes
    const updateCurrentTime = () => {
        // Update current time state variable
        setCurrentTime(progressBar?.current?.value)
        // Update rendered elapsed time on progress bar 
        progressBar?.current?.style?.setProperty('--seek-before-width', `${progressBar?.current?.value / duration * 100}%`)
    }

    // Update the current time when dragging the input range slider
    const updateTimeWithSlider = () => {
        audioElement.current.currentTime = progressBar?.current?.value
        updateCurrentTime()
    }
    
    // Update the current time when time elapses
    const whilePlaying = () => {
        // Update progress bar value to match the audio element, since the audio element tracks the MP3 duration
        progressBar.current.value = audioElement?.current?.currentTime
        // Update the current time to match it
        updateCurrentTime()
        // Update the animation reference value with whilePlaying as the callback
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    // Conditional for pause or play and update current time rendering frames
    const playPauseToggle = () => {
        const previousValue = isPlaying
        setIsPlaying(!previousValue)
        // If not is playing, then play and begin animation of time change
        if (!previousValue) {
            audioElement?.current?.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        // Else pause and stop animation of time change
        } else {
            audioElement?.current.pause()
            cancelAnimationFrame(animationRef?.current)
        }
    }

    // Update volume when dragging the input range slider
    const changeVolume = (e) => {
        // Set volume state variable to target value
        setVolume(+e.target.value)
        // Update audio element's volume when moving the volume bar slider
        audioElement.current.volume = volume
        // Update rendered volume value on volume bar 
        volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
    }

    const muteToggle = () => {
        if (volume !== 0) {
            setPreviousVolume(volume)
            setVolume(0)
            volumeBar.current.value = 0
            audioElement.current.volume = 0
            volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
        } else {
            setVolume(previousVolume)
            volumeBar.current.value = previousVolume
            audioElement.current.volume = previousVolume
            volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
        }
    }

    return (
        <>
            <audio ref={audioElement} src={nowPlaying.songUrl} autoPlay={true} volume={volume} ></audio>

            {nowPlaying && 
                <div className="playbar-currently-playing-song-div">
                    <Link to={`/albums/${nowPlaying?.Album?.id}`}>
                        <div className="playbar-song-art-div">
                            <div className="playbar-song-art-shadow">
                                <img className="playbar-song-art" src={nowPlaying?.Album?.imgUrl} alt="song-art" />
                            </div>
                        </div>
                    </Link>
                    <div className="playbar-song-info-div">
                        <div className="playbar-song-title-div">
                            <Link className="playbar-song-title" to={`/albums/${nowPlaying?.Album?.id}`} >{nowPlaying?.name}</Link>
                        </div>
                        <div className="playbar-song-artist-title-div">
                            <Link className="playbar-song-artist-title" to={`/artists/${nowPlaying?.Artist?.id}`} >{nowPlaying?.Artist?.name}</Link>
                        </div>
                    </div>
                    <div className="playbar-heart-div">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
            }

            <div className={`${ nowPlaying ? "playbar-controls-div-playing" : "playbar-controls-div-not-playing"}`}>
                <div className="playbar-controls-buttons-div">
                    <div className="playbar-controls-button-div">
                        <button disabled={!nowPlaying ? true : false}>
                            <i className="fas fa-random"></i>
                        </button>
                    </div>

                    <div className="playbar-controls-button-div">
                        <button disabled={!nowPlaying ? true : false}>
                            <i className="fas fa-step-backward"></i>
                        </button>
                    </div>

                    <div className="playbar-controls-button-div">
                        <button onClick={playPauseToggle} disabled={!nowPlaying ? true : false}>
                            <i className={`${ isPlaying ? "fas fa-pause-circle" : "fas fa-play-circle"}`}></i>
                        </button>
                    </div>
                
                    <div className="playbar-controls-button-div">
                        <button disabled={!nowPlaying ? true : false}>
                            <i className="fas fa-step-forward"></i>
                        </button>
                    </div>

                    <div className="playbar-controls-button-div">
                        <button disabled={!nowPlaying ? true : false}>
                            <i className="fas fa-repeat"></i>
                        </button>
                    </div>
                </div>

                <div className="progress-bar-div">
                    <span className="song-progress">{duration ? calculateTime(currentTime) : "0:00"}</span>
                    <input className="progress-bar" type="range" defaultValue="0" min="0" max={audioElement?.current?.length} ref={progressBar} onChange={updateTimeWithSlider} disabled={!nowPlaying ? true : false} />
                    <span className="song-duration">{duration ? calculateTime(duration) : "0:00"}</span>
                </div>
            </div>

            <div className="playbar-volume-div">
                {/* Troubleshooting mute toggle */}
                <i onClick={muteToggle} className="fas fa-volume"></i>
                <input className="volume-bar" type="range" defaultValue="0.1" min="0" step="0.02" max="1" ref={volumeBar} value={volume} onChange={changeVolume}  />
            </div>
        </>
    )
};

export default AudioPlayer;