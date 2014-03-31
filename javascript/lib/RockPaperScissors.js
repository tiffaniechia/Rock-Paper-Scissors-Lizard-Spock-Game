
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


  var pairs = {
    'rock': ['crushes','scissors', 'crushes', 'lizard'],
    'scissors': ['cut', 'paper','decapitate', 'lizard'],
    'paper': ['covers','rock', 'disproves','spock'],
    'lizard': ['eats','paper', 'poisons','spock'],
    'spock': ['vaporizes','rock', 'smashes','scissors']
  };

  // original rockpaperscissors
  // if (pairs[this.player1.pick] == this.player2.pick) {
  //   return this.player1
  // }

Game.prototype.winner = function() {

  if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) {
    this.win= this.player1
    this.lose = this.player2
    return this.player1
  }

  else if (this.player1.pick == this.player2.pick) {
    return null
  }

  else {
    this.win= this.player2
    this.lose = this.player1
    return this.player2
  }

};


Game.prototype.message = function() {
  return(this.win.name  +" beats " + this.lose.name)
};


Game.prototype.playmessage = function() {

  var index = pairs[this.win.pick].indexOf(this.lose.pick)
  var indexoneless = (pairs[this.win.pick].indexOf(this.lose.pick)) -1 

  return (this.win.pick + " "+(pairs[this.win.pick].slice(indexoneless, index)) +" " + this.lose.pick)

};