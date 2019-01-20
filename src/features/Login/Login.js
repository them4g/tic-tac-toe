import React from 'react';
import styled from 'styled-components';
import { Layout } from '@common/components/Layout';
import { Button } from '@common/components/Button';

const LoginText = styled.div`
  margin-bottom: 12px;
`;

export class Login extends React.Component {
  render() {
    const { login, logout, isLogined, userName } = this.props;

    return (
      <Layout>
        {isLogined ? (
          <React.Fragment>
            <LoginText>Вы вошли как: {userName}</LoginText>
            <Button onClick={logout}>Выйти</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LoginText>Авторизуйтесь, чтобы играть</LoginText>
            <Button onClick={login}>Войти через Google</Button>
          </React.Fragment>
        )}
      </Layout>
    );
  }
}
