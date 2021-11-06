import React, { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { likeAlbum, deleteAlbumLike } from "../../store/users";
import { getAlbums } from "../../store/albums"
import { addPlaylistSong } from '../../store/playlists';
import './Album.css';

const Album = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying, albums }) => {
    const dispatch = useDispatch()

    const dropdownRef = useRef()

    const { albumId } = useParams();
    const album = albums?.find(album => album?.Artist?.id === +albumId)
    const albumSongs = album?.Songs
    const songs = Object.values(useSelector(state => state.songs))

    const sessionUser = useSelector(state => state.session?.user)
    const sessionUserLike = album?.Users?.find(user => user?.id === sessionUser?.id)
    const liked = sessionUserLike?.id === sessionUser?.id

    const allPlaylists = Object.values(useSelector(state => state.playlists))
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === sessionUser?.id);

    const [showDropdown, setShowDropdown] = useState(false)
    const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)

    // useEffect to grab the audio to ensure it's loaded first to avoid grabbing a null audio element
    let audio;
    useEffect(() => {
        audio = document.querySelector("audio")
    });
    
    // Dropdown offclick logic
    useEffect(() => {
        const checkDropdownClickOff = e => {
            if (showDropdown && !dropdownRef?.current?.contains(e?.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", checkDropdownClickOff)

        return () => {
            document.removeEventListener("mousedown", checkDropdownClickOff)
        }
    }, [showDropdown])

    const handleDropdown = () => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const playPauseToggle = () => {
        const previousValue = isPlaying
        setIsPlaying(!previousValue)
        // If not is playing, then play and begin animation of time change
        if (!previousValue) {
            audio.play()
            // Else pause and stop animation of time change
        } else {
            audio.pause()
        }
    }
    
    const handleAlbumLike = async () => {
        if (!liked) {
            const payload = {
                albumId: album.id,
                userId: sessionUser?.id
            }
            await dispatch(likeAlbum(payload))
        } else {
            const payload = {
                albumId: album.id,
                userId: sessionUser?.id
            }
            await dispatch(deleteAlbumLike(payload))
        }
        await dispatch(getAlbums())
    }

    // const addSongToPlaylist = (e) => {
    //     e.preventDefault()

    //     const payload = {
    //         songId: song.id,
    //         playlistId: e.target.id
    //     }

    //     dispatch(addPlaylistSong(payload))
    //     // setPlaylistId("");
    // }
    
    const playSong = (e) => {
        const song = albumSongs?.find(song => song?.id === +e?.target?.id)
        setNowPlaying(song)

        audio.play()
        setIsPlaying(true)
    }

    const stopSong = () => {
        audio.pause()
        setIsPlaying(false)
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
                    <span className="album-details-year">{album?.releaseDate}</span>
                    <span className="album-details-song-amount">{album?.songCount},</span>
                    <span className="album-details-length">{album?.albumDuration}</span>
                </div>
                </div>
            </div>

            <div className="album-page-buttons-div">
                <div className="album-song-control-div" onClick={playPauseToggle}>
                    <img className="album-song-control-image" src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"}/>
                </div>
                <div className="album-heart-div">
                    <button className="album-like-button" onClick={handleAlbumLike} >
                        <i id={!liked ? "heart-default" : "heart-liked"} className="far fa-heart"></i>
                    </button>
                    </div>
                <div className="album-dropdown-div" onClick={handleDropdown} ref={dropdownRef}>
                    <i className="fas fa-ellipsis-h"></i>
                    {showDropdown &&
                        <div className="album-dropdown-options" onClick={e => e.stopPropagation()}>
                                <div className="album-dropdown-option-playlist"
                                onMouseEnter={() => setShowPlaylistOptions(true)}
                                onMouseLeave={() => setShowPlaylistOptions(false)}>
                                    Add to playlist
                                    <i className="fas fa-caret-right"></i>

                                    { showPlaylistOptions && 
                                        <div className="album-dropdown-playlist-options-div">
                                            <ul>
                                                {userPlaylists.map(userPlaylist => 
                                                    <li className="album-dropdown-playlist-option" onClick={(e) => console.log(userPlaylist)}>{userPlaylist.name}</li>
                                                )}
                                            </ul>
                                        </div>
                                    }
                                </div>
                        </div>}
                </div>
            </div>

            {/* <div className="song-section">
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
            </div>  */}

        </>
    )
}

export default Album;