import React, { useEffect, useState, useRef } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
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
    // const sessionUserFollow = artist?.Users?.find(user => user?.id === sessionUser?.id)
    // const artistFollowed = sessionUserFollow?.id === sessionUser?.id

    const pathName = location?.pathname?.split('/');
    const path = pathName[1];
    const pageId = pathName[2]

    const dropdownRef = useRef()

    const allPlaylists = Object.values(useSelector(state => state.playlists))
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === sessionUser?.id);

    const [showDropdown, setShowDropdown] = useState(false)
    // const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)

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

    const artistPlayerButtonClick = () => {
        const previousValue = isPlaying
        setIsPlaying(!previousValue)
        // If not is playing, then play and begin animation of time change

        if (!previousValue) {
            if (!nowPlaying) {
                setNowPlaying(artistSongs[0])
            }
            setIsPlaying(true)
            audio.play()
            // Else pause and stop animation of time change
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }

    let artistSongsByPopularity = artistSongs.sort((a, b) => {
        return b.Users.length - a.Users.length
    });
    
    if (artistSongsByPopularity.length > 5) artistSongsByPopularity = artistSongsByPopularity.slice(0, 5)

    // const handleArtistFollow = () => {

    // }

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
                        <img className="big-player-button" src={!isPlaying ? "https://i.imgur.com/7QSCa6X.png" : "https://i.imgur.com/QtT4j0R.png"} onClick={artistPlayerButtonClick}/>

                    {/* <button className={!artistFollowed ? "artist-not-followed" : "artist-followed"} onClick={handleArtistFollow}> 
                        {artistFollowed ? "Follow" : "Following"}
                    </button> */}
                </div>

                <h2 className="artist-songs-section-header">Popular</h2>
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