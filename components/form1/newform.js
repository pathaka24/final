import React from 'react'
import styles from './newform.module.css'
import Button from '@mui/material/Button';

const Newform = () => {
  return (
    <div className={styles.formMain}>
          <h1>Ask a Question</h1>
        <form className={styles.formMainCenter}>
              <div className={styles.formMainLeft}>
                   <input type='text' placeholder='Your Name' required />
                   <input type='email' placeholder='Your Email' required />
                   <input type='text' placeholder='Phone Number' required />
                   <select name="cars" id="cars" className={styles.selectArea} >
                          <option value="volvo">Receive Answer By</option>
                          <option value="volvo">Phone</option>
                          <option value="saab">Email</option>
                   </select>
              </div>
              <div className={styles.formMainRight}> 
                   <input type='text' placeholder='Subject' required />
                   <textarea type='text' placeholder='Enter your message' className={styles.testArea}   required />
                   <Button type='submit' variant="contained" color="secondary">
                       Send Question
                   </Button>
              </div>
        </form>
    </div>
  )
}

export default Newform