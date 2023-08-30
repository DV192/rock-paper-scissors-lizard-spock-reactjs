import { useEffect, useState } from 'react';
import InitialGame from './InitialGame';
import Game from './Game';
import Rules from './Rules';
import styles from './Home.module.css';
import { data } from '../constants/data'
import Logo from '../assets/images/logo-bonus.svg'

export default function Home() {

  const [score, setScore] = useState(0);
  const [gameData, setGameData] = useState([]);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    setGameData(data)
    setScore(localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0)
  }, []);

  const onChangeScore = (score) => {
    setScore(score)
    localStorage.setItem('score', score)
  }

  return (
    <div className={styles.home_main}>
      {isRulesModalOpen && <Rules setIsRulesModalOpen={setIsRulesModalOpen} />}
      <div className={styles.header}>
        <img src={Logo} alt='logo' className={styles.logo} />

        <div className={styles.score_component}>
          <div className={styles.score_title}>Score</div>
          <h1 className={styles.score_value}>{score}</h1>
        </div>
      </div>

      <div className={styles.game_component}>
        {
          isGameStarted ?
            <Game
              score={score}
              onChangeScore={onChangeScore}
              gameData={gameData}
              setGameData={setGameData}
              setIsGameStarted={setIsGameStarted}
            />
            :
            <InitialGame
              gameData={gameData}
              setGameData={setGameData}
              setIsGameStarted={setIsGameStarted}
            />
        }
      </div>

      <div className={styles.rule_component}>
        <button className={styles.btn} onClick={() => setIsRulesModalOpen(true)}>
          Rules
        </button>
      </div>
    </div>
  )
}