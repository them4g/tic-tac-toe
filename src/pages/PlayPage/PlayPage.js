import React from 'react';
import { Game } from '@features/Game';

export class PlayPage extends React.Component {
  render() {
    const { match } = this.props;
    return <Game id={match.params.id} />;
  }
}
