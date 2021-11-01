import React from 'react';
import { DarkText, H1, ScoreText } from '../../styles/typograph';

import { Actions, Container, ScoreContainer } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
        <Actions>
            <H1>
                Rock
            </H1>
            <H1>
                Paper
            </H1>
            <H1>
                Scissors
            </H1>
        </Actions>  
        <ScoreContainer>
            <ScoreText>SCORE</ScoreText>
            <DarkText>12</DarkText> 
        </ScoreContainer>   
    </Container>
  );
}

export default Header;