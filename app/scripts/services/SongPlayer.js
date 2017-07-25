(function() {
  function SongPlayer (Fixtures) {
    var SongPlayer = {};

    // @desc Stores current album information
    // @type {Object}
    var currentAlbum = Fixtures.getAlbum();

    // @desc Buzz object audio file
    // @type {Object}
    var currentBuzzObject = null;

    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };

    // @function setSong
    // @desc Stops currently playing song and loads new audio file as currentBuzzObject
    // @param {Object} song
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      // @desc Get the index of current song.
      // @type {Object}

      SongPlayer.currentSong = song;
    };

    // @function playSong
    // @desc Plays song when selected
    // @param {Object} song
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    // @function stopSong
    // @desc Stops song when selected
    // @param {Object} song
    var stopSong = function(song) {
     currentBuzzObject.stop();
     song.playing = null;
   };

    // @desc current song
    // @type {Object}
    SongPlayer.currentSong = null;

    // @function SongPlayer.play
    // @desc Declares when the play button is visible, and plays the audio file when button is clicked.
    // @param {Object} song
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
    };

    // @function SongPlayer.pause
    // @desc Declares when the pause button is visible, and pauses the audio file when button is clicked.
    // @param {Object} song
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    // @function SongPlayer.previous
    // @desc Selects the previous song
    // @type {Object}
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    // @function SongPlayer.next
    // @desc Selects the next song
    // @type {Object}
    SongPlayer.next = function() {
    var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    currentSongIndex++;

    if (currentSongIndex > 5) {
      stopSong
    } else {
      var song = currentAlbum.songs[currentSongIndex];
      setSong(song);
      playSong(song);
    }
  };

    return SongPlayer;
  };

  angular
  .module('blocJams')
  .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
