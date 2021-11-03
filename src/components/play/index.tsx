import React, { useContext, useEffect, useState } from 'react';

import GameContext from '../../context/gameContext';
import Circle from '../circles';

import { Button, Container, ContainerResult, NewH1 } from './styles';
const Play: React.FC = () => {
  const { yourAction } = useContext(GameContext)

  const [isPlaying, setIsPlaying] = useState(true);
  const [housePicked, setHousePicked] = useState<any>();
  const [winner, setWinner] = useState<'player' | 'house' | 'draw'>()

  const possibleActions: any = ['Rock', 'Paper', 'Scissors'];

  let count = 0;

  const getHousePicked = () => {
    if (count >= 10) {
      setIsPlaying(false)   
      verifyWinner()   
    } 

    const possibleActionsLength = possibleActions.length;

    setHousePicked(Math.floor(Math.random() * (0 + ( possibleActionsLength - 1 ) + 1)) + 0)
    console.log(housePicked);
    
    count++
  }

  const verifyWinner = () => {
    console.log('yourAction', yourAction);
    console.log('winner', housePicked);
    
    
    if(housePicked) {
      console.log('possibleActions', possibleActions[housePicked]);
      if (possibleActions[housePicked] === 'Rock' && yourAction === 'Scissors') {
        return setWinner('house')
      } 
      if (possibleActions[housePicked] === 'Scissors' && yourAction === 'Rock') {
        return setWinner('player')
      }
      if (possibleActions[housePicked] === 'Paper' && yourAction === 'Rock') {
        return setWinner('house')
      } 
      if (possibleActions[housePicked] === 'Rock' && yourAction === 'Paper') {
        return setWinner('player')
      }
      if (possibleActions[housePicked] === 'Scissors' && yourAction === 'Paper') {
        return setWinner('house')
      } 
      if (possibleActions[housePicked] === 'Paper' && yourAction === 'Scissors') {
        return setWinner('player')
      }
    }

    setWinner('draw')
  }

  useEffect(() => {
    if (isPlaying) {
      var interval = setInterval(() => {
        getHousePicked()        
      }, 200);
      return () => clearInterval(interval)
    }
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
      {!isPlaying && (
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
          <Button>
            Play again
          </Button>
        </ContainerResult>
      )}
      <div>
      <NewH1>The House Picked</NewH1>
        <Circle 
          action={possibleActions[housePicked] as 'Rock' | 'Paper' | 'Scissors'}
          large
        />
      </div>
    </Container>
  );
}

export default Play;