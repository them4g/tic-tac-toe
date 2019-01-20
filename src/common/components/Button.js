import React from 'react';
import styled from 'styled-components';
import { COLORS, TRANSITIONS } from '@common/constants/styles';

const StyledButton = styled.button`
  padding: 12px 24px;
  color: ${COLORS.DARK};
  background: ${props => (props.disabled ? COLORS.DEFAULT : COLORS.SECONDARY)};
  border: none;
  transition: ${TRANSITIONS.DEFAULT};

  &:hover {
    background: ${COLORS.SECONDARY_LIGHT};
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
