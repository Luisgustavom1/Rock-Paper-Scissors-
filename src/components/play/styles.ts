import styled from 'styled-components';

import { H1 } from '../../styles/typograph';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  text-align: center;

  width: 50vw;

  margin: 0 auto;
`;

export const NewH1 = styled(H1)`
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 5px;

    margin-bottom: 60px;
`

export const ContainerResult = styled.section`
    margin-top: 150px;

    h1 {
        font-size: 2.3rem;
        font-weight: 700;

        color: white;
    }
`

export const Button = styled.button`
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 4px;

    background-color: white;
    color: rgb(250, 0, 0);
    width: 150px;
    height: 35px;

    border-radius: 6px;

    margin-top: 10px;
    &:hover {
        opacity: .8;
    }
`