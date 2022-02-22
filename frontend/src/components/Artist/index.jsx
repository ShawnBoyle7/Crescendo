/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likeArtist, deleteArtistLike, getUsers } from '../../store/users';
import { getArtists } from '../../store/artists';
import SongDiv from '../SongDiv';
import './Artist.css';

function Artist({
  nowPlaying, setNowPlaying, isPlaying, setIsPlaying,
}) {
  const dispatch = useDispatch();
  const location = useLocation();

  const { artistId } = useParams();
  const artists = Object.values(useSelector((state) => state.artists));
  const artist = artists?.find((artistItem) => artistItem?.id === +artistId);
  const songs = Object.values(useSelector((state) => state.songs));
  const artistSongs = songs?.filter((song) => song?.artistId === +artistId);

  const sessionUser = useSelector((state) => state.session?.user);
  const sessionUserFollow = artist?.Users?.find((user) => user?.id === sessionUser?.id);
  const artistFollowed = sessionUserFollow?.id === sessionUser?.id;

  const pathName = location?.pathname?.split('/');
  const path = pathName[1];
  const pageId = pathName[2];

  const dropdownRef = useRef();

  const allPlaylists = Object.values(useSelector((state) => state.playlists));
  const userPlaylists = allPlaylists.filter((playlist) => playlist?.userId === sessionUser?.id);

  const [showDropdown, setShowDropdown] = useState(false);
  // const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)

  // useEffect to grab the audio to ensure it's loaded first to avoid grabbing a null audio element
  let audio;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    audio = document.querySelector('audio');
  });

  // Dropdown offclick logic
  useEffect(() => {
    const checkDropdownClickOff = (e) => {
      if (showDropdown && !dropdownRef?.current?.contains(e?.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', checkDropdownClickOff);

    return () => {
      document.removeEventListener('mousedown', checkDropdownClickOff);
    };
  }, [showDropdown]);

  const artistPlayerButtonClick = () => {
    const previousValue = isPlaying;
    setIsPlaying(!previousValue);
    // If not is playing, then play and begin animation of time change

    if (!previousValue) {
      if (!nowPlaying) {
        setNowPlaying(artistSongs[0]);
      }
      setIsPlaying(true);
      audio.play();
      // Else pause and stop animation of time change
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  let artistSongsByPopularity = artistSongs.sort((a, b) => b.Users.length - a.Users.length);

  if (artistSongsByPopularity.length > 5) {
    artistSongsByPopularity = artistSongsByPopularity.slice(0, 5);
  }

  const handleArtistFollow = async () => {
    if (!artistFollowed) {
      const payload = {
        artistId: artist.id,
        userId: sessionUser?.id,
      };
      await dispatch(likeArtist(payload));
      await dispatch(getArtists());
      await dispatch(getUsers());
    } else {
      const payload = {
        artistId: artist.id,
        userId: sessionUser?.id,
      };
      await dispatch(deleteArtistLike(payload));
      await dispatch(getArtists());
      await dispatch(getUsers());
    }
  };

  return (
    <div className="artist-page">
      <div className="artist-header-container">
        <img className="artist-header-image" src={artist?.headerUrl} alt="" />
        <div className="artist-header-info-container">
          <div className="verified-container">
            <svg className="verified-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z" fill="#2E77D0" />
              <path d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z" fill="#fff" />
            </svg>
            <span className="verified-text">Verified Artist</span>
          </div>
          <h1 className="artist-header-name">{artist?.name}</h1>
          <span className="monthly-listeners">9001 monthly listeners</span>
        </div>
      </div>

      <div className="artist-page-buttons-div">
        <img className="big-player-button" src={!isPlaying ? 'https://i.imgur.com/7QSCa6X.png' : 'https://i.imgur.com/QtT4j0R.png'} onClick={artistPlayerButtonClick} alt="player-button" />

        <button className="artist-follow-button" onClick={handleArtistFollow} type="button">
          {!artistFollowed ? 'Follow' : 'Following'}
        </button>
      </div>

      <h2 className="artist-songs-section-header">Popular</h2>
      <div className="artist-songs-section-container">
        <table className="artist-songs-section">
          <tbody>
            <tr className="null-row"><td className="null-td" /></tr>
            {artistSongs?.slice(0, 5).map((song, idx) => (
              <SongDiv
                key={song.id}
                song={song}
                num={(idx + 1)}
                path={path}
                pageId={pageId}
                playlists={userPlaylists}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Artist;
