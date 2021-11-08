import React, { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useSelector} from "react-redux"
import { addPlaylistSong, deletePlaylistSong, deletePlaylist } from '../../store/playlists';
import SongDiv from "../SongDiv";
import './Playlist.css';

const Playlist = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying }) => {

    useEffect(() => {
        document.querySelector(".playlist-page").addEventListener("scroll", (e) => {
            const nav = document.querySelector("nav")
            
            if (e.target.scrollTop === 0) {
                nav?.classList.add("top-navigation-bar-default")
                nav?.classList.remove("top-navigation-bar-scrolled")
            } else if (e.target.scrollTop > 0) {
                console.log("teELSE IF")
                nav?.classList.remove("top-navigation-bar-default")
                nav?.classList.add("top-navigation-bar-scrolled")
            }
    
        })
    }, [])

    const location = useLocation()
    const pathName = location?.pathname?.split('/');
    const path = pathName[1];
    const pageId = pathName[2]

    const dropdownRef = useRef()
    
    const sessionUser = useSelector(state => state.session?.user)
    const { playlistId } = useParams();
    const playlists = Object.values(useSelector(state => state.playlists))
    const userPlaylists = playlists?.filter(playlist => playlist?.userId === sessionUser?.id)
    const playlist = userPlaylists?.find(playlist => playlist?.id === +playlistId)
    const playlistSongs = playlist?.Songs

    const [showDropdown, setShowDropdown] = useState(false)
    const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)

    // useEffect to grab the audio to ensure it's loaded first to avoid grabbing a null audio element
    let audio;
    useEffect(() => {
        audio = document.querySelector("audio")
    });
    
    // Dropdown offclick logic
    useEffect(() => {
        const checkDropdownClickOff = (e) => {
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

    const playlistPlayerButton = () => {
        setIsPlaying(!isPlaying)
        // If not is playing, then play and begin animation of time change

        if (!isPlaying) {
            const firstSong = playlistSongs[0]
            audio.src = firstSong.songUrl
            setNowPlaying(firstSong)
            setIsPlaying(true)
            audio.play()
            // Else pause and stop animation of time change
        } else {
            audio.pause()
        }
    }

    return (
        <>
            <div className="playlist-page">
                <div className="playlist-page-header">
                    <div className="album-art-div">
                        <img className="album-art" src={playlist?.Album?.imgUrl ? playlist?.Album?.imgUrl : "https://i.imgur.com/pZ6CUjL.png"}/>
                    </div>
                    <div className="album-details-div">
                        <span className="album-span">PLAYLIST</span>
                        <h1 className="album-name-header">{playlist?.name}</h1>
                        <span className="album-details-username">{sessionUser?.username}</span>
                        <span className="album-details-song-amount">{"15"} songs, </span>
                        <span className="album-details-length">{"40 min 50 sec"}</span>
                    </div>
                </div>

                <div className="album-page-buttons-div">
                    <div className="album-song-control-div" onClick={playlistPlayerButton}>
                        <img className="album-song-control-image" src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"}/>
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
                                                    {userPlaylists?.map(userPlaylist => 
                                                        <li id={userPlaylist.id} className="album-dropdown-playlist-option">{userPlaylist.name}</li>
                                                        )}
                                                </ul>
                                            </div>
                                        }
                                    </div>
                            </div>}
                    </div>
                </div>
                
                <div className="album-songs-section-container">
                    <table className="album-songs-section">
                        <thead>
                            <tr className="song-column-header">
                            <th className="song-column-num">#</th>
                            <th className="album-song-column-title">TITLE</th>
                            <th className="song-column-duration"><i className="far fa-clock"></i></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="null-row"><td className="null-td"></td></tr>
                            {playlist?.Songs?.slice(0).map((song, idx) =>
                                <SongDiv
                                key={idx}
                                song={song}
                                num={(idx + 1)}
                                path={path}
                                pageId={pageId}
                                playlists={userPlaylists}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                nowPlaying={nowPlaying}
                                setNowPlaying={setNowPlaying}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Playlist;