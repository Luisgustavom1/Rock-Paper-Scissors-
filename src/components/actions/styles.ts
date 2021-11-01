import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;

  width: 500px;
  height: 350px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  img {
    position: absolute;
    margin-top: 60px;
    z-index: -1;
  }

  div:nth-child(3) {
    align-self: end;
  }
`;
