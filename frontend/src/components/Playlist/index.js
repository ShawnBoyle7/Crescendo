import React, { useEffect, useState, useRef } from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"
import { useSelector} from "react-redux"
import EditPlaylistFormModal from "../EditPlaylistFormModal";
import DeletePlaylistModal from "../DeletePlaylistModal"
import SongDiv from "../SongDiv";
import './Playlist.css';

const Playlist = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying }) => {
    const history = useHistory()

    useEffect(() => {
        document.querySelector(".playlist-page").addEventListener("scroll", (e) => {
            const nav = document.querySelector("nav")
            
            if (e.target.scrollTop === 0) {
                nav?.classList.add("top-navigation-bar-default")
                nav?.classList.remove("top-navigation-bar-scrolled")
            } else if (e.target.scrollTop > 0) {
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
    const playlistCreatorId = playlist?.userId

    const users = Object.values(useSelector(state => state.users))
    const sessionUserWithSongs = users.find(user => user?.id === sessionUser?.id)
    const likedSongs = sessionUserWithSongs?.Songs

    const [showDropdown, setShowDropdown] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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

    const handleDropdown = (e) => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const playlistPlayerButtonClick = () => {
        const previousValue = isPlaying
        setIsPlaying(!previousValue)
        // If not is playing, then play and begin animation of time change

        if (!previousValue) {
            if (!nowPlaying) {
                setNowPlaying(playlistSongs[0])
            }
            audio.play()
            // Else pause and stop animation of time change
        } else {
            audio.pause()
        }
    }

    const handleEdit = () => {
        setShowEditModal(true)
        setShowDropdown(false)
    }

    const handleDelete = () => {
        setShowDeleteModal(true)
        setShowDropdown(false)
    }

    const playlistEmptyOrNotEmpty = () => {
        let content;
        if (playlistSongs && playlistSongs?.length > 0) {
            content = (
                playlistSongs?.slice(0).map((song, idx) =>
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
                    playlist={playlist}
                    setNowPlaying={setNowPlaying}/>)
            )
        } else if (likedSongs && likedSongs?.length > 0) {
            content = (
                likedSongs?.map((song, idx) => 
                    <SongDiv
                        key={idx}
                        song={song}
                        playlistSongId={song?.id}
                        num={(idx + 1)}
                        pageIdx={idx}
                    />)
            )
        } 

        let renderPlaylist = (
            <table className="song-columns">
                <thead>
                <tr className="song-column-header">
                    <th className="song-column-num">#</th>
                    <th className="song-column-title">TITLE</th>
                    <th className="song-column-album">ALBUM</th>
                    <th className="song-column-date">DATE ADDED</th>
                    <th className="song-column-duration"><i className="far fa-clock"></i></th>
                </tr>
                </thead>
        
                <tbody>
                <tr className="null-row"><td className="null-td"></td></tr>
                    {content}
                </tbody>
            </table>
        )

        if (playlistSongs && playlistSongs.length === 0) {
            renderPlaylist = (
                <div className="empty-playlist">
                    <p id="empty-playlist-title">It looks like you don't have anything in this playlist yet.</p>
                </div>
                )
            } else if (likedSongs && likedSongs.length === 0) {
                renderPlaylist = (
                    <div className="empty-liked-songs">
                        <span id="empty-liked-icon" className="material-icons">music_note</span>
                        <p className="empty-header">Songs you like will appear here</p>
                        <p className="empty-details">Save songs by tapping the heart icon.</p>
                        <button
                        onClick={() => history.push('/search')} 
                        className="find-songs">FIND SONGS</button>
                    </div>
                )
            }
        
        return renderPlaylist;
    }

    return (
        <>
            <div className="playlist-page">
                <div className={path === "playlists" ? "playlist-page-header" : "liked-songs-page-header"}>
                    <div className={path === "playlists" ? "art-div" : "hidden"}>
                        <img className={path === "playlists" ? "playlist-art" : "hidden"} src={playlist?.Songs.length && playlist?.Songs[0].Album?.imgUrl ? playlist?.Songs.length && playlist?.Songs[0].Album?.imgUrl : "https://i.imgur.com/pZ6CUjL.png"}/>
                        <img className={path === "library" ? "liked-songs-art" : "hidden"} src="https://static.scientificamerican.com/sciam/cache/file/1522565C-B65E-4BC4-BFA608296192A0D3_source.jpg"/>
                    </div>

                    <div className={path === "playlists" ? "playlist-details" : "liked-song-details"}>
                        <span className="playlist-big-span">Playlist</span>
                        <h1 className={path === "playlists" && playlistCreatorId === sessionUser?.id ? "playlist-name" : "liked-songs-title"}>
                            {playlist ? playlist.name : "Liked songs"}
                        </h1>

                        <div className="description-name-container">
                            <div className="playlist-info">
                                <span className="playlist-creator-username">{sessionUser?.username}</span>
                                <span className="playlist-detail-span">3 min, 10 min 50 sec</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ (playlist && playlistSongs?.length || likedSongs && likedSongs?.length) ? "show-page-controls" : "empty-playlist-controls" }>
                    <img className="big-player-button" onClick={playlistPlayerButtonClick} 
                    src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"}/>

                    <div className={path === "playlists" && sessionUser?.id === playlistCreatorId ? "playlist-dropdown" : "invisible"} onClick={handleDropdown} ref={dropdownRef}>
                            <i className="fas fa-ellipsis-h"></i>
                        {showDropdown && 
                            <div className="playlist-dropdown-options" onClick={(e) => e.stopPropagation()}>
                                <div className="edit-playlist" onClick={handleEdit}>
                                    <span>Edit Details</span>
                                </div>
                                <div className="delete-playlist" onClick={handleDelete}>
                                    <span>Delete</span>
                                </div>
                            </div>}
                    </div>
                </div>

                {showEditModal && 
                    <EditPlaylistFormModal playlistId={playlistId} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>
                }
                
                {showDeleteModal && 
                    <DeletePlaylistModal playlistId={playlistId} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
                }

                {playlistEmptyOrNotEmpty()}
            </div>
        </>
    )
}

export default Playlist;