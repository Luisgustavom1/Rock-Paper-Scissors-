import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
        <ul>
            <li>
                Rock
            </li>
            <li>
                Paper
            </li>
            <li>
                Scissors
            </li>
        </ul>  
        <div>
            <p>Score</p>
            <h1>12</h1>    
        </div> 
    </Container>
  );
}

export default Header;