import React from 'react'
import styles from './mapLeft.module.css'


const MapLeft = () => {
  return (
    <div className={styles.mapLeftMain}>
         <div  className={styles.mapLeftMainTop}>
              <div className={styles.mapLeftMainTopCon}>
                  <h3>Healing Hands</h3>
                   <p>Noida Secoter-93 <br />
                     Near Silver City <br />
                     GB Nagar
                  </p>
              </div>
              <div className={styles.mapLeftMainTopCon}> 
                   <h3>Phone Number</h3>
                   <p>+ (123) 123 - 354 - 923</p>
              </div>
              <div className={styles.mapLeftMainTopCon}>
                  <h3>Email Address</h3>
                  <p>info@physiotherapy.com</p>
              </div>
         </div>
         <div>
              
         </div>
    </div>
  )
}

export default MapLeft