import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AudioPlayer.css"

const AudioPlayer = () => {
    const songs = Object.values(useSelector(state => state.songs))

    return (
        <>
            <div className="playbar-currently-playing-song-div">
                <div className="playbar-song-art-div">
                    <div className="playbar-song-art-shadow">
                        <img className="playbar-song-art" src={songs[0]?.Album?.imgUrl} />
                    </div>
                </div>
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

            <div className="playbar-time-controls-div">

            </div>

            <div className="playbar-volume-div">

            </div>
        </>
    )
};

export default AudioPlayer;