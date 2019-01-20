import React from 'react';
import styled from 'styled-components';
import { Button } from '@common/components/Button';
import { COLORS, TRANSITIONS } from '@common/constants/styles';

const GameButton = styled(Button)`
  flex-shrink: 0;
  margin-left: auto;
  opacity: 0;
`;

const GameName = styled.div`
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: ${TRANSITIONS.DEFAULT};
`;

const GameWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.DEFAULT};
  transition: ${TRANSITIONS.DEFAULT};

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

    ${GameButton} {
      opacity: 1;
    }

    ${GameName} {
      color: ${COLORS.PRIMARY};
    }
  }
`;

export class Game extends React.Component {
  render() {
    const { name, gameId, joinGame } = this.props;

    return (
      <GameWrapper>
        {<GameName>{name}</GameName>}
        <GameButton onClick={e => joinGame(gameId, e)}>Играть</GameButton>
      </GameWrapper>
    );
  }
}
