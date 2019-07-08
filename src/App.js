import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList'
import AddPlayer from './components/AddPlayer/AddPlayer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  };

onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

onPlayerAdd = (name) => {
  const newPlayer = {
    name: name,
    score: 0,
  }
  
  this.setState({
    players: [...this.state.players, newPlayer]
  })
}

onPlayerRemove = (playerIndex) => {
  this.state.players.splice(playerIndex, 1)
  var newPlayers = this.state.players
  this.setState({
    players: newPlayers
  })
}

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd}/>
        <PlayersList 
          players={this.state.players} 
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
} 

export default App;
