import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import GameContext from '../../context/gameContext';
import Circle from '../circles';

import { Button, Container, ContainerResult, NewH1 } from './styles';

const Play = () => {
  const history = useHistory();
  const { yourAction } = useContext(GameContext)

  const [isPlaying, setIsPlaying] = useState(true);
  const [housePicked, setHousePicked] = useState<'Rock' | 'Paper' | 'Scissors'>('Rock');
  const [winner, setWinner] = useState<'player' | 'house' | 'draw'>()

  const possibleActions = ['Rock', 'Paper', 'Scissors'];

  let count = 0;

  const getHousePicked = () => {
    const possibleActionsLength = possibleActions.length;
    const newHousePicked = Math.floor(Math.random() * (0 + ( possibleActionsLength - 1 ) + 1));

    setHousePicked(() => possibleActions[newHousePicked] as 'Rock' | 'Paper' | 'Scissors')
    
    count++

    if (count >= 10) {
      setIsPlaying(false) 
      return
    } 
  }

  const verifyWinner = () => { 
    if (housePicked === 'Rock' && yourAction === 'Scissors') {
      return setWinner('house')
    } 
    if (housePicked === 'Scissors' && yourAction === 'Rock') {
       return setWinner('player')
    }
    if (housePicked === 'Paper' && yourAction === 'Rock') {
      return setWinner('house')     

    } 
    if (housePicked === 'Rock' && yourAction === 'Paper') {
      return setWinner('player')
    }
    if (housePicked === 'Rock' && yourAction === 'Scissors') {
      return setWinner('player')
    }
    if (housePicked === 'Scissors' && yourAction === 'Paper') {
      return setWinner('house')      

    } 
    if (housePicked === 'Paper' && yourAction === 'Scissors') {
      return setWinner('player'); 
    }

    return setWinner('draw')    
  }

  useEffect(() => {
    if (isPlaying) {
      var interval = setInterval(() => {
        getHousePicked()        
      }, 200);
      return () => clearInterval(interval)
    }
    verifyWinner()  

  }, [isPlaying])

  return (
    <Container>
      <div>
        <NewH1>You Picked</NewH1>
        <Circle 
          action={yourAction}
          large
        />
      </div>
      {!isPlaying && winner && (
        <ContainerResult>
          <h1>{
            winner === 'player'
              ? 'YOU WON'
              : (
                winner === 'house' 
                ? 'YOU LOSE'
                : 'DRAW'
              )
          }</h1>
          <Button onClick={() => history.push({ pathname: '/' })}>
            Play again
          </Button>
        </ContainerResult>
      )}
      <div>
      <NewH1>The House Picked</NewH1>
        <Circle 
          action={housePicked}
          large
        />
      </div>
    </Container>
  );
}

export default Play;