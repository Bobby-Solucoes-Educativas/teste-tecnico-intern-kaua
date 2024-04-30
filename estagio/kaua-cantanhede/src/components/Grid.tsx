// Grid.tsx
import React from 'react';
import { produce } from 'immer';

// Criando uma interface e definindo algumas propriedades a elas, o que elas esperam receber, onde irá criar o grid para interação com o usuario
interface GridProps {
    grid: number[][];
    setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
}

// Este componente 'Grid' renderiza o grid do jogo como uma matriz de divs. Cada div representa uma célula do grid e tem um manipulador de clique que alterna o estado da célula entre viva (1) e morta (0).
const Grid: React.FC<GridProps> = ({ grid, setGrid }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${grid[0].length}, 30px)`,
            }}
        >
            {grid.map((row, i) =>
                row.map((col, j) => (
                    <div
                        key={`${i}-${j}`}
                        onClick={() => {
                            const newGrid = produce(grid, (gridCopy) => {
                                gridCopy[i][j] = grid[i][j] ? 0 : 1;
                            });
                            setGrid(newGrid);
                        }}
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: grid[i][j] ? '#0d0a1b' : '#ccc',
                            border: '1px solid black',
                        }}
                    />
                ))
            )}
        </div>
    );
};

export default Grid;
