

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likeAlbum, deleteAlbumLike, getUsers } from '../../store/users';
import { getAlbums } from '../../store/albums';
import { addPlaylistSong } from '../../store/playlists';
import SongDiv from '../SongDiv';
import './Album.css';
import { getSongs } from '../../store/songs';

function Album({
  nowPlaying, setNowPlaying, isPlaying, setIsPlaying, albums,
}) {
  useEffect(() => {
    document.querySelector('.album-page').addEventListener('scroll', (e) => {
      const nav = document.querySelector('nav');

      if (e.target.scrollTop === 0) {
        nav?.classList.add('top-navigation-bar-default');
        nav?.classList.remove('top-navigation-bar-scrolled');
      } else if (e.target.scrollTop > 0) {
        nav?.classList.remove('top-navigation-bar-default');
        nav?.classList.add('top-navigation-bar-scrolled');
      }
    });
  }, []);

  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = location?.pathname?.split('/');
  const path = pathName[1];
  const pageId = pathName[2];

  const dropdownRef = useRef();

  const { albumId } = useParams();
  const album = albums?.find((albumitem) => albumitem?.Artist?.id === +albumId);
  const songs = Object.values(useSelector((state) => state.songs));
  const albumSongs = songs.filter((song) => song.albumId === +albumId);

  const sessionUser = useSelector((state) => state.session?.user);
  const sessionUserLike = album?.Users?.find((user) => user?.id === sessionUser?.id);
  const liked = sessionUserLike?.id === sessionUser?.id;

  const allPlaylists = Object.values(useSelector((state) => state.playlists));
  const userPlaylists = allPlaylists.filter((playlist) => playlist?.userId === sessionUser?.id);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showPlaylistOptions, setShowPlaylistOptions] = useState(false);

  // useEffect to grab the audio to ensure it's loaded first to avoid grabbing a null audio element
  let audio;
  useEffect(() => {
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

  const handleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const albumPlayerButtonClick = () => {
    const previousValue = isPlaying;
    setIsPlaying(!previousValue);
    // If not is playing, then play and begin animation of time change

    if (!previousValue) {
      if (!nowPlaying) {
        setNowPlaying(albumSongs[0]);
      }
      setIsPlaying(true);
      audio.play();
      // Else pause and stop animation of time change
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAlbumLike = async () => {
    if (!liked) {
      const payload = {
        albumId: album.id,
        userId: sessionUser?.id,
      };
      await dispatch(likeAlbum(payload));
      await dispatch(getAlbums());
      await dispatch(getUsers());
    } else {
      const payload = {
        albumId: album.id,
        userId: sessionUser?.id,
      };
      await dispatch(deleteAlbumLike(payload));
      await dispatch(getAlbums());
      await dispatch(getUsers());
    }
  };

  const addAlbumToPlaylist = async (e) => {
    e.preventDefault();
    setShowDropdown(false);

    const newPlaylistSongs = await (albumSongs?.map(async (song) => {
      const payload = {
        songId: song.id,
        playlistId: +e.target.id,
      };
      await dispatch(addPlaylistSong(payload));
      await dispatch(getAlbums());
      await dispatch(getSongs());
      await dispatch(getUsers());
    }));

    return newPlaylistSongs;
  };

  return (
    <div className="album-page">
      <div className="album-page-header">
        <div className="album-art-div">
          <img className="album-art" src={album?.imgUrl} alt="" />
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
            <span className="album-details-song-amount">
              {album?.songCount}
              {' '}
              songs,
            </span>
            <span className="album-details-length">{album?.albumDuration}</span>
          </div>
        </div>
      </div>

      <div className="album-page-buttons-div">
        <img className="big-player-button" src={!isPlaying ? 'https://i.imgur.com/7QSCa6X.png' : 'https://i.imgur.com/QtT4j0R.png'} onClick={albumPlayerButtonClick} alt="" />
        <div className="album-heart-div">
          <button className="album-like-button" onClick={handleAlbumLike} type="button">
            <i id={!liked ? 'heart-default' : 'heart-liked'} className="far fa-heart" />
          </button>
        </div>
        <div className="album-dropdown-master-container" onClick={handleDropdown} ref={dropdownRef}>
          <i className="fas fa-ellipsis-h" />
          {showDropdown
              && (
                <div className="album-dropdown-container" onClick={(e) => e.stopPropagation()}>
                <div
                  className="song-dropdown-option"
                  onMouseEnter={() => setShowPlaylistOptions(true)}
                  onMouseLeave={() => setShowPlaylistOptions(false)}
                  >
                  <span>Add to playlist</span>
                  <i className="fas fa-caret-right" />
                  { showPlaylistOptions
                      && (
                      <div className="album-page-playlist-selector-container">
                        <ul className="playlist-selector-list">
                          {userPlaylists?.slice(0).map((playlist) => (
                            <li id={playlist?.id} className="playlist-item" onClick={addAlbumToPlaylist} key={playlist.id}>
                              <span className="playlist-item-name">
                                {playlist?.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}
                </div>
              </div>
              )}
        </div>
      </div>

      <div className="album-songs-section-container">
        <table className="album-songs-section">
          <thead>
            <tr className="song-column-header">
              <th className="song-column-num">#</th>
              <th className="album-song-column-title">TITLE</th>
              <th className="song-column-duration"><i className="far fa-clock" /></th>
            </tr>
          </thead>

          <tbody>
            <tr className="null-row"><td className="null-td" /></tr>
            {albumSongs?.slice(0).map((song, idx) => (
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

export default Album;
