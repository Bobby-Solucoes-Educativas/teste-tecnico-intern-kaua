// Buttons.tsx
import React from 'react';

// Criando uma interface e definindo algumas propriedades a elas, o que elas esperam receber
interface ButtonsProps {
    runGame: boolean;
    setRunGame: React.Dispatch<React.SetStateAction<boolean>>;
    initSimulation: () => void;
    clearGrid: () => void;
}

// Este componente 'Buttons' renderiza dois botões que controlam a execução e a limpeza do jogo.
const Buttons: React.FC<ButtonsProps> = ({
    runGame,
    setRunGame,
    initSimulation,
    clearGrid,
}) => {
    return (
        <div className='buttons'>
            <button
                onClick={() => {
                    setRunGame(!runGame);
                    if (!runGame) {
                        initSimulation();
                    }
                }}
            >
                {runGame ? 'parar' : 'começar'}
            </button>
            <button onClick={clearGrid}>limpar</button>
        </div>
    );
};

export default Buttons;
