import styles from './Rules.module.css'
import IconClose from '../assets/images/icon-close.svg'
import ImageRule from '../assets/images/image-rules-bonus.svg'

export default function Rules(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_component}>
        <div className={styles.header}>
          <h1 className={styles.title}>Rules</h1>

          <div className={styles.close_btn} onClick={() => props.setIsRulesModalOpen(false)}>
            <img src={IconClose} alt='icon-close' />
          </div>
        </div>

        <div className={styles.rule_img_component}>
          <img src={ImageRule} alt='rule' className={styles.rule_img} />
        </div>

        <div className={styles.close_btn_sm_screen} onClick={() => props.setIsRulesModalOpen(false)}>
          <img src={IconClose} alt='icon-close' />
        </div>
      </div>
    </div>
  )
}