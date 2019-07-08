
import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button_add" onClick={() => props.onPlayerScoreChange(1)} >+</span>
    <span className="Player__button_subtract" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
    <span className="Player_button_delete" onClick={() => props.onPlayerRemove()}>X</span>
  </li>
);

export default Player;