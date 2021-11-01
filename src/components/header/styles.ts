import styled from 'styled-components';

export const Container = styled.header`
  min-width: 300px;
  width: 40vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 40px auto 0 auto;

  padding: 10px 15px;

  border: 2px solid ${({ theme }) => theme.headerOutline};
  border-radius: 10px;
`;

export const ScoreContainer = styled.article`
    background: white;
    padding: 10px 40px;
    border-radius: 8px;

    @media(max-width: 400px) {
        padding: 10px 20px;
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;