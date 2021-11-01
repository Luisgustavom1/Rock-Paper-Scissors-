import { Container } from './styles';

interface RulesProps {
    setShowModal: (value: boolean) => void;
}

const Rules = ({ setShowModal }: RulesProps) => {
  return (
    <Container onClick={() => setShowModal(true)}>
        Rules
    </Container>
  )
}

export default Rules;