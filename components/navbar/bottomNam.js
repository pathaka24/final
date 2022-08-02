import Link from 'next/link'
import React from 'react'
import styles from './bottom.module.css'

const BottomNam = () => {
  return (
    <div className={styles.bottomCantainer}>
        <ul className={styles.bottomCantainerList}>
            <li>
              <Link href='/'>
                   <a>
                      Home
                   </a>
              </Link>
            </li>
            <li> 
            <Link href='/serviceList/serviceList'> 
                   <a>
                      Service
                   </a>
              </Link>
            </li>
            <li>
            <Link href='/location/location'>
                   <a>
                     Contact
                   </a>
              </Link>
            </li>
            <li>
            <Link href='/about/aboutR'>
                   <a>
                      About
                   </a>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomNam