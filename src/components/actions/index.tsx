import React from 'react';
import Circle from '../circles';

import { Container } from './styles';

import triangle from '../../assets/bg-triangle.svg';

const Actions: React.FC = () => {
  return(
    <Container>
      <img src={triangle} alt="triangulo de background" />
      <Circle action='Paper' />
      <Circle action='Rock' />
      <Circle action='Scissors' />
    </Container>
  )
}

export default Actions;