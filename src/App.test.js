import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList'

it('renders without crashing', () => {
  shallow(<App />);
});
it('should update player score', () => {
  const component = shallow(<App />)

  // const players = [
  //   {
  //       name: 'Kunegunda',
  //       score: 0
  //   }
  // ];

  // component.setState({players})
  const onScoreUpdate = component.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = component.state().players;

  expect(playersAfterUpdate[0].score).toBe(5)
})