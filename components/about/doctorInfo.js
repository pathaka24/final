import React from 'react'
import styles from './doctor.module.css'
import ResultLeft from '../result/resultLeft'
import Image from 'next/image'

const DoctorInfo = () => {
  return (
    <div className={styles.doctorMain}> 
        <div className={styles.doctorMainLeft}>
           <ResultLeft />
        </div>
          <div className={styles.doctorMainRight}> 
              
               <div>
                  <h3>Introduction</h3>
                     <p>
                           Kristina   Physical Therapy in 2006 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.With over 20 years of clinical experience, Kristina's practice follows the philosophy that therapy is most successful when people are treated as whole human beings, not as individual parts, and her work is focused on finding and treating the root causes.
                   </p>
              </div>
                 <div>
                      <h3>Education</h3>
                      <p>
                      Kristina, PT, DPT, graduated from Physio University as a Physical Therapist with a Doctorate in Physical Therapy. Kristina has experiences and interest in outpatient orthopedics physical therapy and sport rehabilitation.
                      </p>
                 </div>
               </div>
          <div className={styles.doctorMainBot}>
            <div>
            <Image src='/serv/tret.jpg' height='800px' width='600px' />
            </div>
                 
          </div>
    </div>
  )
}

export default DoctorInfo