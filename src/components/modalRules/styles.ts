import styled from 'styled-components';
import { DarkText } from '../../styles/typograph';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, .2);

  position: fixed;
  top: 0;
  right: 0;

  display: grid;
  place-items: center;
`;

export const Content = styled.main`
  width: 25vw;
  min-width: 375px;

  background: white;
  padding: 30px 1vw;

  border-radius: 10px;

  text-align: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 20px;

    padding: 0 10px;
  }
`;

export const NewDarkText = styled(DarkText)`
    font-size: 2.5rem;
    font-weight: 600;
`