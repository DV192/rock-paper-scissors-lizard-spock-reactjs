import { useEffect, useState } from 'react';
import styles from './Game.module.css';

export default function Game(props) {
  const [gameData, setGameData] = useState([]);
  const [userSelected, setUserSelected] = useState({});
  const [hostSelected, setHostSelected] = useState({});
  const [gameStatus, setGameStatus] = useState({ isUserWin: false, isHostWin: false, text: null });

  useEffect(() => {
    setGameData(props?.gameData)
    setUserSelected(props?.gameData.find(val => val?.isSelected))
  }, [props?.gameData]);

  useEffect(() => {
    setTimeout(() => {
      let index = Math.floor(Math.random() * 5)
      let host_selected = gameData[index]
      setHostSelected(host_selected)

      setTimeout(() => {
        if (userSelected?.win?.includes(host_selected?.id)) {
          setGameStatus({ isUserWin: true, isHostWin: false, text: 'You Win' })
          props.onChangeScore(props.score + 1)
        } else if (host_selected?.win?.includes(userSelected?.id)) {
          setGameStatus({ isUserWin: false, isHostWin: true, text: 'You Lose' })
          props.onChangeScore(props.score - 1 < 0 ? props.score : props.score - 1)
        } else if (userSelected?.id === host_selected?.id) {
          setGameStatus({ isUserWin: false, isHostWin: false, text: 'Game Tie' })
        } else {
          setGameStatus({ isUserWin: false, isHostWin: false, text: null })
        }
      }, 1000);
    }, 1000);
  }, [gameData, userSelected]);

  const onClickPlayAgain = () => {
    let temp = [...gameData]

    temp.forEach(element => {
      element.isSelected = false
    })

    setGameData([])
    setUserSelected({})
    setHostSelected({})
    setGameStatus(null)
    props.setGameData(temp)
    props.setIsGameStarted(false)
  }

  return (
    <div className={styles.game_started}>
      <div className={styles.user_selected_component}>
        <div className={styles.user_title}>You picked</div>
        <div className={styles[`${userSelected?.className}_img_component`]}
          style={{ zIndex: gameStatus?.isUserWin ? '1' : '2' }}
        >
          {gameStatus?.isUserWin && <div className={styles.bg_rings}></div>}
          <div className={styles.icon_img_bg_white}>
            <img src={userSelected?.img}
              alt={userSelected?.id}
              className={styles[`${userSelected?.className}_img`]}
            />
          </div>
        </div>
      </div>

      {
        gameStatus?.text === null ? <div></div> :
          <div className={styles.game_status_component}>
            <div className={styles.game_status}>{gameStatus?.text}</div>
            <button className={styles.btn} onClick={onClickPlayAgain}>
              Play Again
            </button>
          </div>
      }

      <div className={styles.host_selected_component}>
        <div className={styles.user_title}>The House picked</div>
        {
          hostSelected?.id === undefined ?
            <div className={styles.host_selected}></div>
            :
            <div className={styles[`${hostSelected?.className}_img_component`]}
              style={{ zIndex: gameStatus?.isHostWin ? '1' : '2' }}
            >
              {gameStatus?.isHostWin && <div className={styles.bg_rings}></div>}
              <div className={styles.icon_img_bg_white}>
                <img src={hostSelected?.img}
                  alt={hostSelected?.id}
                  className={styles[`${hostSelected?.className}_img`]}
                />
              </div>
            </div>
        }
      </div>
    </div>
  )
}