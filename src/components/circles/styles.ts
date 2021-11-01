import styled from 'styled-components';

interface ContainerProps {
    action: 'Paper' | 'Rock' |'Scissors'
}

export const Container = styled.div<ContainerProps>`
    background: ${({ theme, action }) => `linear-gradient(${theme.actions[`${action}Gradient`]})`};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    div {
        border-radius: 50%;
        background: white;
        
        width: 120px;
        height: 120px;
        
        display: grid;
        place-items: center;
    }
`;
// [`${action}Gradient`]