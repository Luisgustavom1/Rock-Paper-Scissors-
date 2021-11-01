import { createContext, ReactNode, useState } from "react";

interface GameContextData {
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

interface GameProviderProps {
    children: ReactNode
}

const GameContext = createContext({} as GameContextData)

export function GameProvider({ children }: GameProviderProps) {
    const [showModal, setShowModal] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    
    return (
        <GameContext.Provider value={{ showModal, setShowModal, isPlaying, setIsPlaying }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext 