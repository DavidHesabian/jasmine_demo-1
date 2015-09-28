function Player() {
};

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  if (this.isPlaying == false) {
    throw new Error("whaddap?!?")
  }

  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};