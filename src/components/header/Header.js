import React from 'react'
import styles from './Header.module.css'
// import resumeSvg from "../../assets/resume.svg"

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>

        <p className={styles.heading}>
            A <span>Resume</span> that makes you stand out!!
        </p>
        <p className={styles.heading}>
            Make Yours in minute: Free Online Resume Builder!!
        </p>
        </div>
         <div className={styles.right}>
            <img src="images/resume.svg" alt="Resume" />
        </div>
    </div>
  )
}

export default Header
