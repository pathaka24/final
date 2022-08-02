import React from 'react'
import styles from './form.module.css'
import FormCon from './formCon'
import FormInput from './formInput'
import Newform from '../form1/newform'

const Form = (props) => {
  return (
    <div style={{
        backgroundImage:`url(${props.imgUrl})`,
         
        backgroundSize:'cover',
        backgroundPosition:'50% 50%'
    }}>
        <div className={styles.formMain}>
            <FormCon />
            <Newform />
        </div>
    </div>
  )
}

export default Form