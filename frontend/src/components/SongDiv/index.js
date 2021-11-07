import React, { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { likeSong, deleteSongLike } from "../../store/users"
import { getSongs } from "../../store/songs"
import { deletePlaylistSong } from "../../store/playlists"
import { addPlaylistSong } from '../../store/playlists';
import { Link } from "react-router-dom"
import "./SongDiv.css"

const SongDiv = ({ song, num, path, pageId, playlists, isPlaying, setIsPlaying, nowPlaying, setNowPlaying }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const validArtLocations = ["playlists", "library", "artists", "search"]
    
    // State refresh necessary for liked status to update dynamically
    const sessionUser = useSelector(state => state.session?.user)
    const songs = Object.values(useSelector(state => state.songs))
    const currentSong = songs.find(thisSong => thisSong.id === song.id)
    const sessionUserLike = currentSong?.Users?.find(user => user?.id === sessionUser?.id)
    const liked = sessionUserLike?.id === sessionUser?.id
    
    // State Variables
    
    const [isHovering, setIsHovering] = useState(false)
    const [revealPlaylists, setRevealPlaylists] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [pageType, setPageType] = useState(path)
    
    // Functions 
    let audio;
    useEffect(() => {
        audio = document.querySelector("audio")
    });

    // Dropdown
    const dropdownRef = useRef()
    const playlistsRef = useRef()
    const handleDropdown = (e) => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
        e.stopPropagation()
    }

    useEffect(() => {
        const dropdownListener = (e) => {
            if ((dropdownRef && !dropdownRef?.current?.contains(e?.target) || (playlistsRef && !playlistsRef?.current?.contains(e?.target)))) {
                setShowDropdown(false)
                setRevealPlaylists(false)
            }
        }
        document.addEventListener("mousedown", dropdownListener)

        return () => {
            document.removeEventListener("mousedown", dropdownListener)
        }
    }, [showDropdown])
    
    const detectPageType = () => {
        let className;
        
        switch(pageType) {
            case "playlists":
                if (playlists.find(playlist => playlist?.id === sessionUser?.id)) {
                    className = "song-dropdown-options"
                } else {
                    className = "song-dropdown-default"
                }
                break;

            case "artists":
                className = "song-dropdown-default"
                break;
            case "albums":
                className = "song-dropdown-default"
                break;
            case "library":
                className = "song-dropdown-default"
                break;
            case "search":
                className = "song-dropdown-default"
                break;
            default:
                return;
            }

            return className;
        }

    const setSongWidth = (pageType) => {
        switch (pageType) {
            case "playlists":
                return "title-column";
            case "artists":
                return "artist-song-title-column";
            case "albums":
                return "album-song-title-column";
            case "library":
                return "title-column";
            default:
                break;
        }
    }
                
    const handleMouseEnter = (e) => {
        if (e.target.className === "current-before-playlist-add" || "other-before-playlist-add") {
            setRevealPlaylists(true)
        } else if (e.target.className === "song-dropdown-option") {
            setRevealPlaylists(false)
        } else {
            setIsHovering(true)
        }
    }

    const setPlaylistSelectorPosition = () => {
        if (revealPlaylists) {
            if (detectPageType() === "song-dropdown-options") {
                return "playlist-selector-container"
            } else {
                return "playlist-selector-container-other"
            }

        } else {
            return "hidden"
        }
    }
    
    const handlePlaylistClick = (e) => {
        setShowDropdown(false)
        setIsHovering(false)
        
        const payload = {
            playlistId: e.target.id,
            songId: song.id
        }
        
        dispatch(addPlaylistSong(payload))
    }
    
    const likeCurrentSong = async () => {
        if (!liked) {
            const payload = {
                songId: currentSong?.id,
                userId: sessionUser?.id
            }
            await dispatch(likeSong(payload))
        } else {
            const payload = {
                songId: currentSong?.id,
                userId: sessionUser?.id
            }
            await dispatch(deleteSongLike(payload))
        }
        await dispatch(getSongs())
    }
    
    const removeSongFromPlaylist = () => {
        const payload = {
            playlistId: pageId,
            songId: song.id
        } 
        
        dispatch(deletePlaylistSong(payload))
        setShowDropdown(false)
        setIsHovering(false)
    }
    
    const playlistActionsValidator = () => {
        if (path === "playlists" && playlists.find(playlist => playlist?.id === sessionUser?.id) !== undefined) {
            return true
        } else {
            return false;
        }
    }
    
    const playSong = () => {
        setNowPlaying(song)
        audio.play()
        setIsPlaying(true)
    }
    
    const stopSong = () => {
        audio.pause()
        setIsPlaying(false)
    }
    

    // Play column conditional render function
    const playHoverStatusRender = () => {
        const songNum = (
            <div id={!isPlaying && nowPlaying.id === song.id ? "is-playing" : ""}>{num}</div>
            )
            
        const volumeIconPlaying = (
            <i id={isPlaying && nowPlaying.id === song.id ? "is-playing" : ""} className="fas fa-volume-up"></i>
            )
        
        const playButton = (
            <i className="fas fa-play" onClick={playSong}></i>
            )
    
        const pauseButton = (
            <i className="fas fa-pause" onClick={stopSong}></i>
            )

        // Hovering
        if (isHovering) {
            if (isPlaying && nowPlaying.id === song.id) {
                return pauseButton
            } else {
                return playButton
            }
        }

        // Not hovering
        if (!isHovering) {
            if (isPlaying && nowPlaying.id === song.id) {
                return volumeIconPlaying
            } else {
                return songNum
            }
        }
    }

    return (
        <>
            <tr className="song" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <td className="num-column">
                    {playHoverStatusRender()}
                </td>
                <td className={setSongWidth(pageType)}>
                    <div className="title-details">
                        <div className="item-art-container">
                            <img className={validArtLocations.includes(pageType) ? "item-album-art" : "hidden"} src={song.Album.imgUrl} alt="song art" />
                        </div>
                        <div className="title-details-text-container">
                            <div className="title-artist-container">
                                <p id={nowPlaying.id === song.id ? "is-playing" : ""}>
                                    {song.name}
                                </p>
                                <div className="song-artist-link-container">
                                    <Link to={`/artists/${song.Artist.id}`} className={pageType === "artists" ? "hidden" : "song-artist-link"}>
                                        {song.Artist.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>

                <td className={pageType === "playlists" || pageType === "library" ? "album-column" : "hidden"}>
                    <Link to={`/albums/${song.Album.id}`}>
                        {song.Album.name}
                    </Link>
                </td>

                <td className={pageType === "playlists" || pageType === "library" ? "date-added-column" : "hidden"}>
                    {song.Album.releaseDate}
                </td>
                
                <td className="duration-column">
                    <div className="song-controls-container">
                        <div className="song-controls">
                            <i id={!liked ? "heart-default" : "heart-liked"} className={isHovering ? "far fa-heart" : "far fa-heart invisible"} onClick={likeCurrentSong}></i>
                            {/* Song duration below */}
                            <span className="song-div-song-length">3:00</span>
                            <div className={isHovering ? "dropghbdown" : "invisible"} onClick={handleDropdown} ref={dropdownRef}>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    {showDropdown &&
                        <div className={detectPageType()} onMouseDown={(e) => e.stopPropagation()}>
                            <div className="song-dropdown-option" onMouseEnter={(e) => handleMouseEnter(e)} onClick={() => history.push(`/artists/${song.Artist.id}`)}>
                                Go to artist
                            </div>
                            <div className="song-dropdown-option" onMouseEnter={(e) => handleMouseEnter(e)} onClick={() => history.push(`/albums/${song.Album.id}`)}>
                                Go to album
                            </div>
                            <div className={playlistActionsValidator() ? "song-dropdown-option" : "hidden"}
                                onMouseEnter={(e) => handleMouseEnter(e)}
                                onClick={removeSongFromPlaylist}>
                                Remove from this playlist
                            </div>
                            <div className={playlistActionsValidator() ? "current-before-playlist-add" : "other-before-playlist-add"} onMouseEnter={(e => handleMouseEnter(e))} ref={playlistsRef}>
                                    <span>Add to playlist</span>
                                    <i className="fas fa-caret-right"></i>
                                <div className={setPlaylistSelectorPosition()}>
                                    <ul className={revealPlaylists ? "playlist-selector" : "hidden"}>
                                        {playlists.slice(0).reverse().map(playlist =>
                                            <li className="playlist-item" key={playlist.id} id={playlist.id} onClick={(e) => (handlePlaylistClick(e))}>
                                                <span>{playlist.name}</span>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </td>

            </tr>
        </>
    )
}

export default SongDiv;