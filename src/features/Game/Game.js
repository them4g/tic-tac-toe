import React from 'react';
import styled from 'styled-components';
import { Layout } from '@common/components/Layout';
import { COLORS, FONTS } from '@common/constants/styles';

const GameHeader = styled.div`
  display: flex;
  padding-bottom: 24px;
  justify-content: space-between;
`;

const PlayerName = styled.div`
  max-width: 50%;
  overflow: hidden;
  color: ${props => (props.isSecond ? COLORS.SECONDARY : COLORS.PRIMARY)};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const GameField = styled.div`
  position: relative;
  display: flex;
  width: 302px;
  margin: 0 auto;
  flex-wrap: wrap;
  border: 1px solid ${COLORS.DEFAULT};
`;

const GameFieldItem = styled.button`
  width: 100px;
  height: 100px;
  padding: 0;
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  background: ${COLORS.BACKGROUND};
  border: 1px solid ${COLORS.DEFAULT};

  &:hover {
    border-color: ${props =>
      props.isPrimary ? COLORS.PRIMARY : COLORS.SECONDARY};
  }
`;

const GameEnd = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${FONTS.LARGE};
  color: ${COLORS.PRIMARY};
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.9);
`;

export class Game extends React.Component {
  handleClick = index => {
    const { id, field, uid, move, playerOne, playerTwo } = this.props;
    const newField = [...field];
    const isFirstPlayer = uid === playerOne.uid;
    newField[index] = isFirstPlayer ? 2 : 1;

    const update = {
      gameId: id,
      field: newField,
      uid: isFirstPlayer ? playerTwo.uid : playerOne.uid,
    };

    move(update);
  };

  checkWin = (field, type) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const arr = combinations[i].filter(item => field[item] === type);

      if (arr.length === 3) {
        return true;
      }
    }
    return false;
  };

  gameEnd = field => {
    const firstPlayerWin = this.checkWin(field, 2);
    const secondPlayerWin = this.checkWin(field, 1);
    const emptyFields = field.filter(item => item === 0);

    console.log(firstPlayerWin);
    console.log(secondPlayerWin);
    console.log(!emptyFields.length);
    return firstPlayerWin || secondPlayerWin || !emptyFields.length;
  };

  render() {
    const { playerOne, playerTwo, field, nextMoveUser, uid } = this.props;
    const isFirstPlayer = uid === playerOne.uid;
    const isSecondPlayer = uid === playerTwo.uid;
    const isDisabled = !playerTwo.uid || nextMoveUser !== uid;
    const isFirstPlayerWin = this.checkWin(field, 2);
    const isSecondPlayerWin = this.checkWin(field, 1);
    const gameEnd = this.gameEnd(field);

    return (
      <Layout>
        <GameHeader>
          <PlayerName>{playerOne.displayName}</PlayerName>
          <PlayerName isSecond>{playerTwo.displayName}</PlayerName>
        </GameHeader>
        <GameField>
          {field.map((item, index) => (
            <GameFieldItem
              type={item}
              key={index}
              isPrimary={isFirstPlayer}
              onClick={() => this.handleClick(index)}
              isDisabled={item !== 0 || isDisabled}
            >
              {item === 1 && 'O'}
              {item === 2 && 'X'}
            </GameFieldItem>
          ))}
          {isFirstPlayer &&
            (gameEnd &&
              (isFirstPlayerWin ? (
                <GameEnd>победа</GameEnd>
              ) : (
                <GameEnd>поражение</GameEnd>
              )))}
          {isSecondPlayer &&
            (gameEnd &&
              (isSecondPlayerWin ? (
                <GameEnd>победа</GameEnd>
              ) : (
                <GameEnd>поражение</GameEnd>
              )))}
        </GameField>
      </Layout>
    );
  }
}
