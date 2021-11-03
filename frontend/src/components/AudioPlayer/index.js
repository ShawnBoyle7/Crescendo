import React, { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AudioPlayer.css"

const AudioPlayer = ({ nowPlaying, setNowPlaying }) => {
    const songs = Object.values(useSelector(state => state?.songs))

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    // Essentially establishing state variables for objects, keeping reference to them on re-render.
    const audioElement = useRef();
    const progressBar = useRef();
    const volumeBar = useRef();
    const animationRef = useRef();

    // If the audio element loaded the mp3 file, set the duration state variable and progress bar max value to the length of it
    useEffect(() => {
        const seconds = Math.floor(audioElement?.current?.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;

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
        setIsPlaying(!isPlaying)
        // If not is playing, then play and begin animation of time change
        if (!isPlaying) {
            audioElement?.current?.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        // Else pause and stop animation of time change
        } else {
            audioElement?.current.pause()
            cancelAnimationFrame(animationRef?.current)
        }
    }

    // Update volume when dragging the input range slider
    const changeVolume = () => {
        // Update audio element's volume when moving the volume bar slider
        audioElement.current.volume = volumeBar.current.value
        // Update rendered volume value on volume bar 
        volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
    }

    // Trying to get toggle working
    const mute = () => {
        volumeBar.current.value = 0
        audioElement.current.volume = 0
        volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
    }

    // const unmute = () => {
    //     volumeBar.current.value = 0.1
    //     audioElement.current.volume = 0.1
    //     volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar?.current?.value / duration * 1000}%`)
    // }

    return (
        <>
            <audio ref={audioElement} src={nowPlaying.songUrl}></audio>

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

            <div className="playbar-controls-div">
                <div className="playbar-controls-buttons-div">
                    <div className="playbar-controls-button-div">
                        <i className="far fa-random"></i>
                    </div>
                    <div className="playbar-controls-button-div">
                        <i className="fas fa-step-backward"></i>
                    </div>

                    {/* Troubleshooting conditional rendering */}
                    {/* <i {isPlaying ? className="fas fa-pause-circle" : className="fas fa-play-circle"} ></i> */}

                    {isPlaying ?
                        <i onClick={playPauseToggle} className="fas fa-pause-circle"></i>
                    : 
                        <i onClick={playPauseToggle} className="fas fa-play-circle"></i>} 
                
                    <div className="playbar-controls-button-div">
                        <i className="fas fa-step-forward"></i>
                    </div>
                    <div className="playbar-controls-button-div">
                        <i className="fas fa-repeat"></i>
                    </div>
                </div>

                <div className="progress-bar-div">
                    <span className="song-progress">{duration ? calculateTime(currentTime) : "0:00"}</span>
                    <input className="progress-bar" type="range" defaultValue="0" min="0" max="3:00" ref={progressBar} onChange={updateTimeWithSlider} />
                    <span className="song-duration">{duration ? calculateTime(duration) : "0:00"}</span>
                </div>
            </div>

            <div className="playbar-volume-div">
                {/* Troubleshooting mute toggle */}
                <i onClick={mute} className="fas fa-volume"></i>
                <input className="volume-bar" type="range" defaultValue="0.1" min="0" step="0.02" max="1" ref={volumeBar} onChange={changeVolume}  />
            </div>
        </>
    )
};

export default AudioPlayer;