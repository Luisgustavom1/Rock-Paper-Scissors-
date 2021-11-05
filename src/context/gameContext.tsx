import { createContext, ReactNode, useState } from "react";

interface GameContextData {
    yourAction: 'Paper' | 'Rock' |'Scissors';
    setYourAction: (value: 'Paper' | 'Rock' |'Scissors') => void;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

interface GameProviderProps {
    children: ReactNode
}

const GameContext = createContext({} as GameContextData)

export function GameProvider({ children }: GameProviderProps) {
    const [showModal, setShowModal] = useState(true);
    const [yourAction, setYourAction] = useState({} as 'Paper' | 'Rock' |'Scissors');
    
    return (
        <GameContext.Provider value={{ showModal, setShowModal, yourAction, setYourAction }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext 