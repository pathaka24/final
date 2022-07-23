import React from 'react'
import styles from './footer.module.css'
import Footerleft from './Footerleft'
 

const Footer = (props) => {
  return (
     
    <div 
    style= {{
      backgroundImage:`url(${props.img})`,
       
      backgroundSize:'cover',
      backgroundPosition:'50% 50%'
   }}
    > 
    <div className={styles.footerMain} >
      <div>
      <Footerleft />
      </div>
      
         
    </div> 
       
    </div>
     
  )
}

export default Footer