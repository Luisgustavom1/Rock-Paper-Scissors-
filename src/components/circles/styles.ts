import styled, { css } from 'styled-components';

interface ContainerProps {
    action: 'Paper' | 'Rock' |'Scissors';
    large: boolean
}

export const Container = styled.div<ContainerProps>`
    ${({ action, large, theme }) => css`
        background: ${`linear-gradient(${theme.actions[`${action}Gradient`]})`};

        width: ${large ? '220px' : '150px'};
        height: ${large ? '220px' : '150px'};

        border-radius: 50%;

        display: grid;
        place-items: center;

        div {
            border-radius: 50%;
            background: white;
            
            width: ${large ? '170px' : '120px'};
            height: ${large ? '170px' : '120px'};
            
            display: grid;
            place-items: center;
        }
        
        &:hover {
            opacity: .9;
        }
    `}
`;
