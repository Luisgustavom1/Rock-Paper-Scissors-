import styled from "styled-components";

export const H1 = styled.h3`
    font-size: 1.8rem;
    color: white;
    font-weight: 600;
`

export const ScoreText = styled.p`
    color: ${({ theme }) => theme.text.scoreText};
    font-weight: 600;
    font-size: 0.8REM;
    letter-spacing: 3px;
`

export const DarkText = styled.h1`
    color: ${({ theme }) => theme.text.darkText};
    font-size: 3.3rem;
`