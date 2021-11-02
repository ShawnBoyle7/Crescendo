import React, { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AudioPlayer.css"

const AudioPlayer = () => {
    const songs = Object.values(useSelector(state => state?.songs))

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    // Establish references to manipulate what they are attached to in the DOM
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    // If the audio element loaded the mp3 file, set the duration state variable and progress bar max value to the length of it
    useEffect(() => {
        const seconds = Math.floor(audioPlayer?.current?.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    // Convert current time or duration to a rounded format for rendering
    const calculateTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);

        if (secs < 10) {
            secs = "0" + secs;
        }
    
        return `${minutes}:${secs}`
    }
    
    // Update the current time when dragging the input range slider
    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar?.current?.value
        changePlayerCurrentTime()
    }
    
    // Update the current time when time elapses
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer?.current?.currentTime
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    // Update the rendered current time of the progress bar
    const changePlayerCurrentTime = () => {
        progressBar?.current?.style?.setProperty('--seek-before-width', `${progressBar?.current?.value / duration * 100}%`)
        setCurrentTime(progressBar?.current?.value)
    }

    // Conditional for pause or play and update current time rendering frames
    const playPauseToggle = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            audioPlayer?.current?.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer?.current.pause()
            cancelAnimationFrame(animationRef?.current)
        }
    }

    return (
        <>
            <audio ref={audioPlayer} src="https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3"></audio>

            <div className="playbar-currently-playing-song-div">
                <Link to={`/albums/${songs[0]?.Album?.id}`}>
                    <div className="playbar-song-art-div">
                        <div className="playbar-song-art-shadow">
                            <img className="playbar-song-art" src={songs[0]?.Album?.imgUrl} alt="song-art" />
                        </div>
                    </div>
                </Link>
                <div className="playbar-song-info-div">
                    <div className="playbar-song-title-div">
                        <Link className="playbar-song-title" to={`/albums/${songs[0]?.Album?.id}`} >{songs[0]?.name}</Link>
                    </div>
                    <div className="playbar-song-artist-title-div">
                        <Link className="playbar-song-artist-title" to={`/artists/${songs[0]?.Artist?.id}`} >{songs[0]?.Artist?.name}</Link>
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
                    <input className="progress-bar" type="range" defaultValue="0" min="0" max="3:00" ref={progressBar} onChange={changeRange} />
                    <span className="song-duration">{duration ? calculateTime(duration) : "0:00"}</span>
                </div>
            </div>

            <div className="playbar-volume-div">
                <i className="fas fa-volume"></i>
                <input className="volume-bar" type="range" defaultValue="0.1" min="0" step="0.02" max="1" />
            </div>
        </>
    )
};

export default AudioPlayer;