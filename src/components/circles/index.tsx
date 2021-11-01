import { ReactNode } from 'react';

import { Container } from './styles';

interface CircleProps {
  children: ReactNode,
  action: 'Paper' | 'Rock' |'Scissors'
}

const Circle = ({ children, action }: CircleProps) => {
  return(
    <Container action={action}>
      <div>{ children }</div>
    </Container>
  );
}

export default Circle;