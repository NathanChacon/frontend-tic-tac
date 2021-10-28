/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null))

  const computeMove = (nextPlayer: Player, squareId: any) => {
    if (nextPlayer === 'X') {
      setNextPlayer('O')
    } else {
      setNextPlayer('X')
    }
    let currentBoardAux = [...currentBoard]
    currentBoardAux[squareId] = nextPlayer

    setCurrentBoard(currentBoardAux)
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }

  const restartGame = () => {
    setStepNumber(0)
    setNextPlayer('X')
    setCurrentBoard(Array(9).fill(null))
  }

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    restartGame
  }
}

export default useGameState;
