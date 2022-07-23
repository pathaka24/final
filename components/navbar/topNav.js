import React from 'react'
import Link from 'next/link'
import styles from './topnav.module.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


const TopNav = () => {
    const add = 'Noida Sec-93'
    const time ='10:00 AM to 8:00 PM'
  return (
    <div className={styles.topNav} >
        <div className={styles.topNavLeft} >
            <p className={styles.topNavText}>Welcome to the professional physiotherapy clinic</p>
        </div>
        <div className={styles.topNavRight}>
            <div className={styles.topNavIcons}> 
                 <Link href='/location/location'> 
                     <AddLocationIcon  className={styles.topNavIcon} />
                 </Link>
                 
                 <p className={styles.topNavText}>{add}</p>
            </div>
            <div className={styles.topNavIcons}>
            <Link href='/location/location'> 
                <AccessTimeFilledIcon className={styles.topNavIcon}  />
                </Link>
                <p className={styles.topNavText}>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default TopNav