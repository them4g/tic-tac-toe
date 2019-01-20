import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { Routes } from '@/routes';
import { history } from '@/history';
import { COLORS, FONTS } from '@common/constants/styles';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    font-family: sans-serif;
    font-size: ${FONTS.NORMAL};
    color: ${COLORS.TEXT_DARK};
    background-color: ${COLORS.BACKGROUND};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export class Root extends React.Component {
  render() {
    const { store, userIsCheck } = this.props;

    return (
      <React.Fragment>
        <Provider store={store}>
          <Router history={history}>{userIsCheck && <Routes />}</Router>
        </Provider>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}
