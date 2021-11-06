import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import './Album.css';

const Album = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying, albums }) => {
    const { albumId } = useParams();
    const album = albums?.find(album => album?.Artist?.id === +albumId)
    const songs = album?.Songs
    const sessionUser = useSelector(state => state.session?.user)
    const allPlaylists = Object.values(useSelector(state => state.playlists))
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === sessionUser?.id);
    const [showDropdown, setShowDropdown] = useState(false)
    const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)

    let audio;

    // Use effect to grab the audio to ensure it's loaded first to avoid grabbing a null audio element
    useEffect(() => {
        audio = document.querySelector("audio")
    });

    const playSong = (e) => {
        const song = songs?.find(song => song?.id === +e?.target?.id)
        setNowPlaying(song)

        audio.play()
        setIsPlaying(true)
    }

    const stopSong = () => {
        audio.pause()
        setIsPlaying(false)
    }

    const handleDropdown = () => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const likeAlbum = () => {
        ""
    }

    return (
        <>
            <div className="album-page-header">
                <div className="album-art-div">
                    <img className="album-art" src={album?.imgUrl}/>
                </div>
                <div className="album-details-div">
                    <span className="album-span">ALBUM</span>
                    <h1 className="album-name-header">{album?.name}</h1>
                <div className="album-artist-div">
                    <div className="album-artist-art-div">
                        <img className="album-artist-art" src={album?.Artist?.imgUrl} alt="artist" />
                    </div>
                    <Link to={`artists/${album?.Artist.id}`} className="album-artist-link">
                        {album?.Artist?.name}
                    </Link>
                    <span className="album-details-year">1965</span>
                    <span className="album-details-song-amount">14 songs,</span>
                    <span className="album-details-length">35 min 32 sec</span>
                </div>
                </div>
            </div>

            <div className="album-page-buttons-div">
                <div className="album-song-control-div">
                    <img className="album-song-control-image" src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"}/>
                </div>
                <div className="album-heart-div">
                    <button className="album-like-button" onClick={likeAlbum}>
                        <i className="far fa-heart"></i>
                    </button>
                    </div>
                <div className="album-dropdown-div" onClick={handleDropdown}>
                    <i className="fas fa-ellipsis-h"></i>
                    {showDropdown &&
                        // onClick={e => e.stopPropagation()
                        <div className="album-dropdown-options">
                                <div className="album-dropdown-option-library">Add to Your Library</div>
                                <div className="album-dropdown-option-playlist" 
                                onMouseEnter={() => setShowPlaylistOptions(true)}
                                onMouseLeave={() => setShowPlaylistOptions(false)}>
                                    Add to playlist
                                    <i className="fas fa-caret-right"></i>

                                    { showPlaylistOptions && 
                                        <div className="album-dropdown-playlist-options-div">
                                            <ul>
                                                {userPlaylists.map(userPlaylist => 
                                                    <li className="album-dropdown-playlist-option">{userPlaylist.name}</li>
                                                )}
                                            </ul>
                                        </div>
                                    }
                                </div>
                        </div>}
                </div>
            </div>

{/* 
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
                            {(isPlaying && nowPlaying === song) &&
                                <button onClick={stopSong}>Pause</button>
                            }
                        </div>)}
                </div>
            </div> 
*/}
        </>
    )
}

export default Album;