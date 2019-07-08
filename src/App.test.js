import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import Player from './components/Player/Player'

it('renders without crashing', () => {
  shallow(<App />);
});
it('should update player score', () => {
  const component = shallow(<App />)

  const players = [
    {
        name: 'Kunegunda',
        score: 0
    }
  ];

  component.setState({players})
  const onScoreUpdate = component.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = component.state().players;

  expect(playersAfterUpdate[0].score).toBe(5)
});
it('should add a player when onPlayerAdd function is called', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

  onPlayerAdd('Ania');
  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});
it('should remove player when onPlayerRemove is called', () => {
  const players = [
    {
      name: 'Ania',
      score: 0
    },
    {
      name: 'Bania',
      score: 0
    }
  ];
  const mockedOnPlayerRemove = jest.fn();
  const appComponent = shallow(<App onPlayerRemove={mockedOnPlayerRemove}/>);
  appComponent.setState({players})


  const onPlayerRemove = appComponent.prop('onPlayerRemove')
  onPlayerRemove(1);
  const playersAfterUpdate = appComponent.state('players');


    expect(playersAfterUpdate.length).toBe(1);
    //W jaki sposób powinienem w tym teście skorzystać z metody onPlayerRemove?
    // i z jakiego miejsca powinienem ją pobrać i dlaczego
});