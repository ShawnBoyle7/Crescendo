import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { deleteSongLike, likeSong } from '../../store/users';
import { getSongs } from '../../store/songs';
import './AudioPlayer.css';

function AudioPlayer({
  nowPlaying, setNowPlaying, isPlaying, setIsPlaying,
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location?.pathname?.split('/');
  const path = pathName[1];
  const pageId = pathName[2];

  const songs = Object.values(useSelector((state) => state.songs));
  const currentSong = songs?.find((song) => song?.id === nowPlaying?.id);
  const playlists = Object.values(useSelector((state) => state.playlists));
  const artists = Object.values(useSelector((state) => state.artists));

  const sessionUser = useSelector((state) => state.session?.user);
  const sessionUserLike = currentSong?.Users?.find((user) => user?.id === sessionUser?.id);
  const liked = sessionUserLike?.id === sessionUser?.id;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [previousVolume, setPreviousVolume] = useState(0);
  const [repeatStatus, setRepeatStatus] = useState('none');

  // Track Order
  const [staticQueue, setStaticQueue] = useState([]);
  const [queue, setQueue] = useState([]);
  const currentIndex = queue?.indexOf(nowPlaying);
  // const [previousShuffledSong, setPreviousShuffledSong] = useState('');
  let nextSong = queue ? queue[currentIndex + 1] : null;
  let previousSong = queue ? queue[currentIndex - 1] : null;

  // Essentially establishing state variables for objects, keeping reference to them on re-render.
  const audioElement = useRef();
  const progressBar = useRef();
  const volumeBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    switch (path) {
      case 'albums':
        const album = nowPlaying?.Album;
        const albumSongs = songs?.filter((song) => song?.albumId === album?.id);
        const albumSongsSorted = albumSongs.sort((a, b) => a.id - b.id);
        setQueue(albumSongsSorted);
        setStaticQueue(albumSongsSorted);
        break;
      case 'artists': {
        const artist = artists?.find((artistItem) => (artistItem?.id) === +pageId);
        const artistSongs = songs?.filter((song) => song?.artistId === artist?.id);
        let artistSongsByPopularity = artistSongs?.sort((a, b) => b.Users.length - a.Users.length);
        if (artistSongsByPopularity.length > 5) {
          artistSongsByPopularity = artistSongsByPopularity.slice(0, 5);
        }
        setQueue(artistSongsByPopularity);
        setStaticQueue(artistSongsByPopularity);
        break;
      }
      case 'playlists': {
        const playlist = playlists?.find((playlistItem) => playlistItem?.id === +pageId);
        const playlistSongs = playlist?.Songs;
        setQueue(playlistSongs);
        setStaticQueue(playlistSongs);
        break;
      }
      default:
        break;
    }
  }, [path, nowPlaying, isPlaying]);

  // Convert seconds to clean readable format
  const calculateTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    if (secs < 10) {
      secs = `0${secs}`;
    }

    return `${minutes}:${secs}`;
  };

  // I use this to update the current time state variable and,
  // the rendered current time of the progress bar when the progress bar value changes
  const updateCurrentTime = () => {
    // Update current time state variable
    // if (progressBar) {
    setCurrentTime(progressBar?.current?.value);
    // }
    // Update rendered elapsed time on progress bar
    progressBar?.current?.style?.setProperty('--seek-before-width', `${progressBar.current.value / (duration * 100)}%`);
  };

  // Update the current time when dragging the input range slider
  const updateTimeWithSlider = () => {
    audioElement.current.currentTime = progressBar?.current?.value;
    updateCurrentTime();
  };

  // Update the current time when time elapses
  const whilePlaying = () => {
    // Update progress bar value to match the audio element,
    // since the audio element tracks the MP3 duration

    if (progressBar?.current?.value) {
      progressBar.current.value = audioElement?.current?.currentTime;
    }

    // Update the current time to match it
    updateCurrentTime();
    // Update the animation reference value with whilePlaying as the callback
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Convert current time or duration to a rounded format for rendering
  const playPauseCallback = () => {
    updateCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Play the next song in the album after a song ends or when the button is clicked
  const songEnded = () => {
    if (!nextSong && repeatStatus !== 'all') {
      setNowPlaying('');
      audioElement.current.src = '';
      setIsPlaying(false);
    }

    if (!nextSong && repeatStatus === 'all') {
      setNowPlaying(queue[0]);
      audioElement.current.src = queue[0]?.songUrl;
      audioElement.current.play();
      setIsPlaying(true);
    }

    if (nextSong) {
      setNowPlaying(nextSong);
      audioElement.current.src = nextSong?.songUrl;
      audioElement?.current?.play();
      setIsPlaying(true);
    }
  };

  // If the audio element loaded the mp3 file,
  // set the duration state variable and progress bar max value to the length of it
  useEffect(() => {
    const seconds = Math.floor(audioElement?.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    audioElement.current.volume = volume;

    audioElement.current.addEventListener('play', playPauseCallback);
    audioElement.current.addEventListener('pause', playPauseCallback);
    audioElement.current.addEventListener('ended', songEnded);
  }, [audioElement?.current?.loadedmetadata, audioElement?.current?.readyState]);

  // Conditional for pause or play and update current time rendering frames
  const playPauseToggle = () => {
    const previousValue = isPlaying;
    setIsPlaying(!previousValue);
    // If not is playing, then play and begin animation of time change
    if (!previousValue) {
      audioElement?.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      // Else pause and stop animation of time change
    } else {
      audioElement?.current.pause();
      cancelAnimationFrame(animationRef?.current);
    }
  };

  // Value for dynamic volume icon
  const volumeValue = document.getElementById("volumeValue")?.value;

  // Update volume when dragging the input range slider
  const changeVolume = (e) => {
    // Set volume state variable to target value
    setVolume(+e.target.value);
    // Update audio element's volume when moving the volume bar slider
    audioElement.current.volume = +e.target.value;
    // Update rendered volume value on volume bar
    volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar.current.value / (duration * 1000)}%`);
  };

  // Set volume to 0 if not muted, otherwise set volume to what it was before it was muted
  const muteToggle = () => {
    if (volume !== 0) {
      setPreviousVolume(volume);
      setVolume(0);
      volumeBar.current.value = 0;
      audioElement.current.volume = 0;
      volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar.current.value / (duration * 1000)}%`);
    } else {
      setVolume(previousVolume);
      volumeBar.current.value = previousVolume;
      audioElement.current.volume = previousVolume;
      volumeBar?.current?.style?.setProperty('--seek-before-width', `${volumeBar.current.value / (duration * 1000)}%`);
    }
  };

  // Skip song to play the next in the track
  const skipSong = () => {
    if (nextSong) {
      setNowPlaying(nextSong);
      audioElement.current.src = nextSong?.songUrl;
      audioElement?.current?.play();
      setIsPlaying(true);
    }

    if (!nextSong && repeatStatus !== 'all') {
      setNowPlaying('');
      audioElement.current.src = '';
      setIsPlaying(false);
    }

    if (!nextSong && repeatStatus === 'all') {
      setNowPlaying(queue[0]);
      audioElement.current.src = queue[0]?.songUrl;
      audioElement.current.play();
      setIsPlaying(true);
    }

    if (repeatStatus === 'one') {
      setRepeatStatus('all');
    }
  };

  // Play the previous song in the album after a song ends or when the button is clicked
  const playPreviousSong = () => {
    if (!previousSong) {
      setNowPlaying(nowPlaying);
      audioElement.current.src = nowPlaying?.songUrl;
      audioElement.current.play();
      setIsPlaying(true);
    } else {
      setNowPlaying(previousSong);
      audioElement.current.src = previousSong?.songUrl;
      audioElement.current.play();
      setIsPlaying(true);
    }
  };

  const loopToggle = () => {
    const loopIcon = document.getElementById('repeat');

    switch (repeatStatus) {
      case 'none':
        setRepeatStatus('all');
        loopIcon?.style?.setProperty('color', 'var(--green)');
        break;
      case 'all':
        setRepeatStatus('one');
        break;
      case 'one':
        setRepeatStatus('none');
        loopIcon?.style?.setProperty('color', 'var(--white)');
        break;
      default:
        break;
    }
  };

  const likeCurrentSong = async () => {
    if (!liked) {
      const payload = {
        songId: nowPlaying.id,
        userId: sessionUser.id,
      };
      await dispatch(likeSong(payload));
    } else {
      const payload = {
        songId: nowPlaying.id,
        userId: sessionUser.id,
      };
      await dispatch(deleteSongLike(payload));
    }
    await dispatch(getSongs());
  };

  // const [shuffle, setShuffle] = useState(false);

  // const shuffleFunction = () => {
  //   let queueCopy = [...queue];
  //   for (let i = 0; i < queueCopy.length; i++) {
  //     let j = Math.floor(Math.random()*queueCopy.length);
  //     [queueCopy[i], queueCopy[j]] = [queueCopy[j], queueCopy[i]]
  //   }
  //   console.log(queueCopy, "NEW QUEUE")
  //   setQueue(queueCopy);
  // }
  
  // const shuffleToggle = () => {
  //   const shuffleIcon = document.querySelector(".fa-random");

  //   if (!shuffle) {
  //     shuffleFunction();
  //     setShuffle(true);
  //     shuffleIcon?.style?.setProperty('color', 'var(--green)');
  //   } else {
  //     setQueue([...staticQueue]);
  //     console.log(staticQueue, "ORIGINAL QUEUE")
  //     setShuffle(false);
  //     shuffleIcon?.style?.setProperty('color', 'var(--white)');
  //   }
  // }

  // useEffect(() => {
  //   let currentSong = queue.find(song => song.id === nowPlaying.id);
  //   let currentIndex = queue.indexOf(currentSong);
  //   nextSong = queue[currentIndex + 1];
  //   previousSong = queue[currentIndex - 1];
  //   console.log(nextSong, "NEXT SONG")
  //   console.log(previousSong, "PREVIOUS SONG")
  // }, [nowPlaying])

  return (
    <>
      <audio ref={audioElement} src={nowPlaying?.songUrl} autoPlay={!!isPlaying} volume={volume} loop={repeatStatus === 'one'} />

      {nowPlaying
        && (
        <div className="playbar-currently-playing-song-div">
          <Link to={`/albums/${nowPlaying?.Album?.id}`}>
            <div className="playbar-song-art-div">
              <div className="playbar-song-art-shadow">
                <img className="playbar-song-art" src={nowPlaying?.Album?.imgUrl} alt="song-art" />
              </div>
            </div>
          </Link>
          <div className="playbar-song-info-div">
            <div className="playbar-song-title-div">
              <Link className="playbar-song-title" to={`/albums/${nowPlaying?.Album?.id}`}>{nowPlaying?.name}</Link>
            </div>
            <div className="playbar-song-artist-title-div">
              <Link className="playbar-song-artist-title" to={`/artists/${nowPlaying?.Artist?.id}`}>{nowPlaying?.Artist?.name}</Link>
            </div>
          </div>
          <div className="playbar-heart-div">
            <button className="far fa-heart" onClick={likeCurrentSong} type="button">
              <i id={!liked ? 'heart-default' : 'heart-liked'} className="far fa-heart" />
            </button>
          </div>
        </div>
        )}

      <div className={`${nowPlaying ? 'playbar-controls-div-playing' : 'playbar-controls-div-not-playing'}`}>
        <div className="playbar-controls-buttons-div">
          {/* <div className="playbar-controls-button-div">
            <button disabled={!nowPlaying ? true : false} onClick={shuffleToggle}>
              <i className="fas fa-random"></i>
            </button>
          </div> */}

          <div className="playbar-controls-button-div">
            <button onClick={playPreviousSong} disabled={!nowPlaying} type="button">
              <i className="fas fa-step-backward" />
            </button>
          </div>

          <div className="playbar-controls-button-div">
            <button onClick={playPauseToggle} disabled={!nowPlaying} type="button">
              <i className={`${isPlaying ? 'fas fa-pause-circle' : 'fas fa-play-circle'}`} />
            </button>
          </div>

          <div className="playbar-controls-button-div">
            <button onClick={skipSong} disabled={!nowPlaying} type="button">
              <i className="fas fa-step-forward" />
            </button>
          </div>

          <div className="playbar-controls-button-div">
            <button onClick={loopToggle} disabled={!nowPlaying} type="button">
              <i id="repeat" className={`${repeatStatus !== 'one' ? 'fas fa-repeat' : 'fas fa-repeat-1'}`} />
            </button>
          </div>
        </div>

        <div className="progress-bar-div">
          <span className="song-progress">{duration ? calculateTime(currentTime) : '0:00'}</span>
          <input className="progress-bar" type="range" defaultValue="0" min="0" max={audioElement?.current?.length} ref={progressBar} onChange={updateTimeWithSlider} disabled={!nowPlaying} />
          <span className="song-duration">{duration ? calculateTime(duration) : '0:00'}</span>
        </div>
      </div>

      <div className="playbar-volume-div">
        <i class="material-icons" onClick={muteToggle}>
          {Number(volumeValue) >= 0.50 && "volume_up"}
          {(Number(volumeValue) < 0.50 && volumeValue > 0) && "volume_down"}
          {Number(volumeValue) === 0 && "volume_mute"}
        </i>
        <input id="volumeValue" className="volume-bar" type="range" min="0" step="0.02" max="1" ref={volumeBar} value={volume} onChange={changeVolume} />
      </div>
    </>
  );
}

export default AudioPlayer;
