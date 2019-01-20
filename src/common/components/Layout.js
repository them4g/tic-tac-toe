import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '@common/constants/styles';

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

const Header = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: ${FONTS.LARGE};
  color: ${COLORS.TEXT_LIGHT};
  background-color: ${COLORS.PRIMARY};
`;

const Main = styled.main`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header>
          <Container>Tic Tac Toe</Container>
        </Header>
        <Main>
          <Container>{children}</Container>
        </Main>
      </React.Fragment>
    );
  }
}
