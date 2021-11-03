import React, { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import './Album.css';

const Album = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying, albums }) => {
    const { albumId } = useParams();
    const album = albums?.find(album => album?.Artist?.id === +albumId)
    const songs = album?.Songs

    let audio;

    useEffect(() => {
        audio = document.querySelector("audio")
        console.log("AUDIO", audio) 
    });

    const playSong = (e) => {
        e.preventDefault()
        const song = songs?.find(song => song?.id === +e?.target?.id)
        setNowPlaying(song)
        audio.play()
        setIsPlaying(true)
    }

    const stopSong = (e) => {
        e.preventDefault()
        audio.pause()
        setIsPlaying(false)
    }

    return (
        <>
            <div className="album-name">
                <h1>{album && album.name}</h1>
            </div>
            <div className="artist-name">
                <h1>{album && album.Artist.name} </h1>
            </div>

            <div className="song-section">
                <div className="song-divs">
                    {songs?.map(song =>
                        <div className="songs-item" key={song.id}>
                            <Link to={`/songs/${song.id}`} key={song.id}>
                                <img className="songs-image" alt={"song"} src={album.imgUrl} />
                                <div className="songs-name">{song.name}</div>
                            </Link>
                            {(!isPlaying || nowPlaying !== song) &&
                                <button id={song.id} onClick={playSong}>Play</button>
                            }
                            {isPlaying && nowPlaying === song &&
                                <button id={song.id} onClick={stopSong}>Pause</button>
                            }
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default Album;