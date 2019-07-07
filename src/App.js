import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kundegunda',
          score: 5,
        },
        {
          name: 'Antoś',
          score: 0,
        }
      ]
    }
  };

  onScoreUpdate = (index, points) => {
   
        this.setState({
          players: [
            this.state.players.map((player, i) => {
              if(i === index){
                return ({
                  name: player.name,
                  score: player.score + points
                })
              }else {
                return player
              }
            })
          ]
        })
        // player.score = player.score + points
      
  };

  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate}/>
      </div>
    );
  }
} 

export default App;
