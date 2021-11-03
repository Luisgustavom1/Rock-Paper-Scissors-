import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/gameContext';
import { H1 } from '../../styles/typograph';
import Circle from '../circles';

import { Button, Container, ContainerResult, NewH1 } from './styles';

const Play: React.FC = () => {
  const { isPlaying, setIsPlaying } = useContext(GameContext);
  const possibleActions = ['Rock', 'Paper', 'Scissors'];

  let count = 0;
  const getHousePicked = () => {
    if (isPlaying) {
      const possibleActionsLength = possibleActions.length;

      const housePicked = Math.floor(Math.random() * (0 + ( possibleActionsLength - 1 ) + 1)) + 0;
      
      count++

      console.log('passe', isPlaying);
      
      return housePicked
    }

    if (count >= 10) {
      setIsPlaying(false)      
    } 
  }

  useEffect(() => {
    if (isPlaying) {
      var interval = setInterval(() => {
        const housePicked = getHousePicked()
        console.log('housepicked', housePicked);
        
      }, 500);
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <Container>
      <div>
        <NewH1>You Picked</NewH1>
        <Circle 
          action='Rock'
          large
        />
      </div>
      <ContainerResult>
        <h1>YOU LOSE</h1>
        <Button>
          Play again
        </Button>
      </ContainerResult>
      <div>
      <NewH1>The House Picked</NewH1>
        <Circle 
          action='Paper'
          large
        />
      </div>
    </Container>
  );
}

export default Play;