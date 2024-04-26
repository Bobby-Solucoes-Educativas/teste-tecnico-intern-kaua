// Este código importa o React, alguns Hooks do React, a função 'produce' da biblioteca 'immer', dois componentes ('Grid' e 'Buttons') do diretório 'components', e o arquivo de estilos CSS para este componente.

import React, { useEffect, useCallback, useRef, useState } from 'react';
import { produce } from 'immer';
import Grid from './components/Grid'; 
import Buttons from './components/Button'; 

import "./App.css" 

// Este código define o tamanho do grid 
const qtdSquareInCols = 25;
const qtdSquareInRows = 25;
// Define as regras para os elementos vizinhos no jogo.
const roulesConditionsElementsNighbor = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]

const App = () =>{
  // Vai inicializar o grid em forma de array bidimensional, colocando todos os elementos zerados.
  const [grid, setGrid] = useState(()=>{
    const rowsGrid = [];
      for(let i = 0; i < qtdSquareInRows; i++ ){
        rowsGrid.push(Array.from(Array(qtdSquareInCols), () => 0))
    }
      // Vai retornar o array
    return rowsGrid;
  });

  // Define o estado e a referência para a execução do jogo e uma função para iniciar a simulação do jogo.
  const [runGame, setRunGame] = useState(false)
  const runGameRef = useRef(runGame);
  runGameRef.current = runGame;

  // Este código define uma função para iniciar a simulação do jogo. A função atualiza o estado do grid com base nas regras do jogo e, em seguida, chama a si mesma após um atraso para continuar a simulação.
  const initSimulation = useCallback(() => {
    if(!runGameRef.current){
      return;
    }
    // criando simulação
    setGrid((gElements)=>{
      return produce(gElements, copyGElementsGrid =>{
        for (let i = 0; i < qtdSquareInRows; i++){
          for(let j = 0; j < qtdSquareInCols; j++){
            let elementNeighbor = 0;

            roulesConditionsElementsNighbor.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;

              if(newI >= 0 && newI < qtdSquareInRows && newJ >= 0 && newJ < qtdSquareInCols){
                elementNeighbor += gElements[newI][newJ]
              }
            })
            
            if( elementNeighbor < 2 || elementNeighbor > 3){
              copyGElementsGrid[i][j] = 0;
            } else if (gElements[i][j] === 0 && elementNeighbor === 3){
              copyGElementsGrid[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(initSimulation, 500);
  }, [])

  // Esta função limpa o grid, definindo todas as células para 0.
  const clearGrid = () => {
    const rowsGrid = [];
    for(let i = 0; i < qtdSquareInRows; i++ ){
      rowsGrid.push(Array.from(Array(qtdSquareInCols), () => 0))
    }
    setGrid(rowsGrid)
  };

  // Usando Hook useEffect do React para iniciar a simulação do jogo sempre que o estado 'runGame' muda.
  useEffect(() => {
    if (runGame) {
      initSimulation();
    }
  }, [runGame]);

  return (
    <>
      {/*Este código cria um cabeçalho para a interface com um título 'Game Of Life'. */}
      <header>
        <h2>Game Of Life</h2>
      </header>
      {/* Este código cria uma seção que contém o componente 'Grid' que está sendo renderizado mediante o import do elemento.*/}
      <section>
        <Grid grid={grid} setGrid={setGrid} />
      </section>
      {/* Cria uma div pai e outra filha, onde dentro da filha conte o componente 'Button' sendo rederizado por meio do import */}
      <div className='btns'>
        <div className="btn">
          <Buttons
            runGame={runGame}
            setRunGame={setRunGame}
            initSimulation={initSimulation}
            clearGrid={clearGrid}
          />
        </div>
      </div>
    </>
  );
};

export default App;
