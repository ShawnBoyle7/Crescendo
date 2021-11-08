import React, { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { likeAlbum, deleteAlbumLike } from "../../store/users";
import { getAlbums } from "../../store/albums"
import { addPlaylistSong } from '../../store/playlists';
import SongDiv from "../SongDiv";
import './Artist.css';

const Artist = ({ nowPlaying, setNowPlaying, isPlaying, setIsPlaying }) => {

    useEffect(() => {
        document.querySelector(".artist-page").addEventListener("scroll", (e) => {
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
    
    const dispatch = useDispatch()
    const location = useLocation()

    const { artistId } = useParams();
    const artists = Object.values(useSelector(state => state.artists))
    const artist = artists?.find(artist => artist?.id === +artistId)
    const songs = Object.values(useSelector(state => state.songs))
    const artistSongs = songs?.filter(song => song?.artistId === +artistId)

    const sessionUser = useSelector(state => state.session?.user)
    const sessionUserFollow = artist?.Users?.find(user => user?.id === sessionUser?.id)
    const artistFollowed = sessionUserFollow?.id === sessionUser?.id

    const pathName = location?.pathname?.split('/');
    const path = pathName[1];
    const pageId = pathName[2]

    const dropdownRef = useRef()

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
    
    // const handleAlbumLike = async () => {
    //     if (!liked) {
    //         const payload = {
    //             albumId: album.id,
    //             userId: sessionUser?.id
    //         }
    //         await dispatch(likeAlbum(payload))
    //     } else {
    //         const payload = {
    //             albumId: album.id,
    //             userId: sessionUser?.id
    //         }
    //         await dispatch(deleteAlbumLike(payload))
    //     }
    //     await dispatch(getAlbums())
    // }

    // const addAlbumToPlaylist = (e) => {
    //     e.preventDefault()
        
    //     albumSongs.forEach(song => {
    //         const payload = {
    //             songId: song.id,
    //             playlistId: e.target.id
    //         }
    //         dispatch(addPlaylistSong(payload))
    //     })
    // }

    // useEffect(() => {
    //     headerRef?.current?.style.setProperty("background-image", artist?.headerUrl)
    // }, [artist])

    const headerStyle = {
        backgroundImage: 'url(' + artist?.headerUrl + ')',
    };

    return (
        <>
            <div className="artist-page">
                <div className="artist-page-header" style={headerStyle}>
                        <h1 className="artist-name-header">{artist?.name}</h1>
                </div>

                <div className="artist-page-buttons-div">
                    <div className="artist-song-control-div" onClick={playPauseToggle}>
                        <img className="artist-song-control-image" src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"}/>
                    </div>

                    <div className="artist-heart-div">
                        <button className="artist-like-button" >
                            <i id={!artistFollowed ? "heart-default" : "heart-liked"} className="far fa-heart"></i>
                        </button>
                    </div>

                    <div className="artist-dropdown-div" onClick={handleDropdown} ref={dropdownRef}>
                        {showDropdown &&
                            <div className="artist-dropdown-options" onClick={e => e.stopPropagation()}>
                                <div className="artist-dropdown-option-playlist"
                                    onMouseEnter={() => setShowPlaylistOptions(true)}
                                    onMouseLeave={() => setShowPlaylistOptions(false)}>
                                        Add to playlist
                                        <i className="fas fa-caret-right"></i>
                                        { showPlaylistOptions &&
                                            <div className="artist-dropdown-playlist-options-div">
                                                <ul>
                                                    {userPlaylists.map(userPlaylist => 
                                                        <li id={userPlaylist.id} className="artist-dropdown-playlist-option" >{userPlaylist.name}</li>
                                                        )}
                                                </ul>
                                            </div>
                                        }
                                </div>
                        </div>}
                    </div>
                </div>

                <div className="artist-songs-section-container">
                    <table className="artist-songs-section">
                        <tbody>
                            <tr className="null-row"><td className="null-td"></td></tr>
                            {artistSongs?.slice(0, 5).map((song, idx) =>
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

export default Artist;