import React from 'react'
import styles from "./hydroponics.module.css";

const Hydroponic = () => {
  return (
    <div className={styles.container}>
        <div className={styles.innerDiv1}>
            <p>WHAT WE DO</p>
            <p>WHY HYDROPONICS</p>
        </div>
        <div>
          <div className={styles.innerDiv2}>
            <p>Plants grown in soil need a more space to spread out as the roots reach out as far as possible into the soil to capture as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your plants receive, or which nutrients they benefit from in the process.</p>
            <div className={styles.detailButton}>View Detail</div>
          </div>
        </div>
    </div>
  )
}

export default Hydroponic