(function() {
    function AlbumCtrl() {
      this.album.songs = [];
      for (var i=0; i < 5; i++) {
        this.album.songs.push(angular.copy(albumPicasso));
      }
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
