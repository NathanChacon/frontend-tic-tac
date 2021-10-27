/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

let currentBoard = Array(9).fill(null);
const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');

  const computeMove = (nextPlayer: Player, squareId: any) => {
    if (nextPlayer === 'X') {
      setNextPlayer('O')
    } else {
      setNextPlayer('X')
    }

    currentBoard[squareId] = nextPlayer
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }

  const restartGame = () => {
    setStepNumber(0)
    setNextPlayer('X')
    currentBoard = Array(9).fill(null);
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
