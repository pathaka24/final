import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.aboutMain}>
        <div className={styles.aboutMainLeft}>
              <div>
                    <h1>Our Vision</h1>
                    <p>To be a company that attracts, rewards, and retains highly skilled physical therapy staff. Our proactive approach to the development of best business practices and promotion of effective treatment methods will help us accomplish this</p>
              </div>
              <div>
                    <h1>Our Philosophy</h1>
                    <p>Physio Physical Therapy is committed to providing high quality outpatient physical therapy services in beautiful state-of-the-art facilities.
                    As a healthcare leader we partner with groups and events within the communities we serve. Our focus on our physical therapists continuing education is unmatched and guarantees our physical therapists understand and put into practice cutting-edge treatments and rehabilitation techniques available for all types of injuries and conditions</p>
              </div>
        </div>

        <div className={styles.aboutMainMiddle}>
              <div>
                   <h1>Our Mission</h1>
                    <p>We are committed as primary healthcare professionals to help our clients resume their lifelong pursuit of health, fitness, and well-being.</p>
              </div>
              <div>
                   <h3>High Quality</h3>
                   <p>We take a goal-oriented approach to healing. Whatever your goals might be we want to help you achieve them</p>
              </div>
              <div>
                   <h3>Patient Care</h3>
                   <p>We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to become an active participant in your recovery and future physical health.</p>
              </div>
              <div>
                   <h3>Professional Service</h3>
                   <p>Our five physical therapists have a combined 120 years of clinical experience and a shared passion for helping our community stay active.</p>
              </div>
        </div>
         <div className={styles.aboutMainRight}>
             <div>
                 <Image src='/serv/tret.jpg' height='480px' width="300px" />
             </div>
         </div>
    </div>
  )
}

export default About