import React from 'react';
import styled from 'styled-components';
import { FONTS } from '@common/constants/styles';
import { Layout } from '@common/components/Layout';
import { Button } from '@common/components/Button';
import { Game } from './components/Game';

const GamesList = styled.div`
  padding-bottom: 24px;
`;

const GamesListTitle = styled.div`
  padding-bottom: 16px;
  font-size: ${FONTS.LARGE};
`;

export class Dashboard extends React.Component {
  render() {
    const { createGame, joinGame, games } = this.props;

    return (
      <Layout>
        <GamesList>
          <GamesListTitle>Список игр</GamesListTitle>
          {!games.length && <div>Никто еще не создал игру.</div>}
          {games.map(game => (
            <Game
              gameId={game.id}
              name={game.name}
              joinGame={joinGame}
              key={game.id}
            />
          ))}
        </GamesList>
        <Button onClick={createGame}>Создать игру</Button>
      </Layout>
    );
  }
}
