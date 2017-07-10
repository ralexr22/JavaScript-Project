(function() {
    function CollectionCtrl(Fixtures) {
<<<<<<< HEAD
      this.albums = [];
      for (var i=0; i < 12; i++) {
        this.albums.push(angular.copy(Fixtures.getAlbum()));
      }
=======
      this.albums = Fixtures.getCollection(12);
>>>>>>> checkpoint-6-assignment
    }

    angular
        .module('blocJams')
<<<<<<< HEAD
        .controller('CollectionCtrl', ["Fixtures", CollectionCtrl]);
=======
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
>>>>>>> checkpoint-6-assignment
})();
