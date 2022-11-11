import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
       <div>
          <h1>AcmeFresh</h1>
       </div>
       <div>
          <h4>HOME</h4>
          <h4>ABOUT</h4>
          <h4>HYDRPONIC FARM</h4>
          <h4>SERVICES</h4>
       </div>
       <div>
          <h3>LOGIN</h3>
       </div>
    </div>
  )
}

export default Navbar