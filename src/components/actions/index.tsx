import React from 'react';
import Circle from '../circles';

import { Container } from './styles';

import triangle from '../../assets/bg-triangle.svg';

const Actions: React.FC = () => {
  return(
    <Container>
      <img src={triangle} alt="triangulo de background" />
      <Circle large={false} action='Paper' />
      <Circle large={false} action='Rock' />
      <Circle large={false} action='Scissors' />
    </Container>
  )
}

export default Actions;