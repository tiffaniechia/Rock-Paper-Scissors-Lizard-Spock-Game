
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {

  var pairs = {
    'rock': ['scissors', 'lizard'],
    'scissors': ['paper', 'lizard'],
    'paper': ['rock', 'spock'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  };

  // original rockpaperscissors
  // if (pairs[this.player1.pick] == this.player2.pick) {
  //   return this.player1
  // }

  if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) {
    return this.player1
  }

  else if (this.player1.pick == this.player2.pick) {
    return null
  }

  else {
    return this.player2
  }

};