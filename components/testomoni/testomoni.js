import React from 'react'
import styles from './testomoni.module.css'
import TestList from './testList'

const Testomoni = () => {
 
    const data = "What are our Patient say ? "

    const testData =  [ {
        id:0,
        imgUrl:'/serv/balancing-and-strengthning-exercises.jpg',
        issue:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        tretMent:'balance and strengthening exercises',
        name:''
    },

    {
      id:1,
      imgUrl:'/serv/physiotherapy-treatment.jpg',
      issue:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      tretMent:'physiotherapy-treatment',
      name:''
    },
    
    {
      id:2,
      imgUrl:'/serv/spinal-exetension-exercises.jpg',
      issue:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      tretMent:'spinal exetension exercises',
      name:''
    },
    {
      id:3,
      imgUrl:'/serv/strengthning-exercises.jpg',
      issue:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      tretMent:'strengthening exercises',
      name:'cupping-therapy.jpg'
    },
    {
      id:4,
      imgUrl:'/serv/cupping-therapy.jpg',
      issue:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      tretMent:'cupping therapy',
      name:''
    }
    

  
  ]
     
  return (
    <div className={styles.testMain}>
         <div className={styles.testTop}>
              <h1>{data}</h1>
         </div>
        <div className={styles.testBot}>
               {
                testData.map((data) => {
                   const {id, imgUrl , issue , name , tretMent } = data 
                  return(
                      <div key={id}>
                          <TestList imgUrl={imgUrl} issue={issue} name='My name' tretMent={tretMent} />
                      </div>
                  )
                })
               }
        </div>
        
    </div>
  )
}

export default Testomoni