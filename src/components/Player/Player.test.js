
import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});
it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(
        <Player name={playerNamePassed} />
      )
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
});
it('should pass callback to parent on + click', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(
        <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
    );
    const plusButton = playerComponent.find('.Player__button_add');
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});
it('should pass callback to parent on - click', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(
        <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
    );
    const plusButton = playerComponent.find('.Player__button_subtract');
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});