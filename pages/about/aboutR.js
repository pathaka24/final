import React from 'react'
import About from '../../components/about/about'
import DoctorList from '../../components/about/doctorList'
import ResultBanner from '../../components/result/resultBanner'
import styles from './aboutmain.module.css'

const AboutR = () => {
  return (
    <div> 
       <ResultBanner  img='/service/page-title.jpg' name='About' />
        <About />
         <hr />
          <h1 className={styles.terepistsHead} >Our Therepists</h1>
        <div className={styles.terepists} style={{marginLeft:'20px'}}>
             <DoctorList />
             <DoctorList />
        </div>
        
    </div>
  )
}

export default AboutR