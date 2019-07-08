
import { shallow } from 'enzyme';
import React from 'react';
import PlayersList from './PlayersList'
import Player from '../Player/Player'

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});
it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

    const playerComponent = shallow(<PlayersList players={players} />);
    const expectedPlayersNumber = playerComponent.find(Player).length;

    expect(expectedPlayersNumber).toEqual(2);
});
it('should be called with right values', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();

    const playerComponent = shallow(
        <PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />
    );
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});
it('should be called with right player index', () => {
    const sourcePlayers = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnPlayerRemove = jest.fn();

    const playerListComponent = shallow(
        <PlayersList players={sourcePlayers} onPlayerRemove={mockedOnPlayerRemove} />
    );
    const firstPlayer = playerListComponent.find(Player).first();
    const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
    onPlayerRemove(0);

    expect(mockedOnPlayerRemove).toBeCalledWith(0);
});