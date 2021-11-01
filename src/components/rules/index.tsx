import { useContext } from 'react';
import GameContext from '../../context/gameContext';
import { Container } from './styles';

const Rules = () => {
  const { setShowModal } = useContext(GameContext);
  return (
    <Container onClick={() => setShowModal(true)}>
        Rules
    </Container>
  )
}

export default Rules;