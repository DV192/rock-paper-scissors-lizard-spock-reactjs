import { useEffect, useState } from 'react'
import styles from './InitialGame.module.css'
import BgPentagon from '../assets/images/bg-pentagon.svg'

export default function InitialGame(props) {

  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    setGameData(props?.gameData)
  }, [props?.gameData]);

  const onClickGameItem = (id) => {
    let temp = [...gameData]

    temp.forEach(element => {
      if (element?.id === id)
        element.isSelected = true
      else
        element.isSelected = false
    })

    setGameData(temp)
    props.setGameData(temp)
    props.setIsGameStarted(true)
  }

  return (
    <div className={styles.all_img_component}>
      <img src={BgPentagon} alt='bg-pentagon' className={styles.bg_pentagon_img} />

      {
        gameData?.map(item => {
          return (
            <div key={item?.id}
              className={`${styles[`${item?.className}_img_component`]}`}
              onClick={() => onClickGameItem(item?.id)}
            >
              <div className={styles.icon_img_bg_white}>
                <img src={item?.img} alt={item?.id}
                  className={styles[`${item?.className}_img`]} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}