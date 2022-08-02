import React from 'react'
import DoctorInfo from '../../components/about/doctorInfo'
import ResultBanner from '../../components/result/resultBanner'

const Doctor = () => {
  return (
    <div>
          <ResultBanner  img='/service/page-title.jpg' name='About' />
        <DoctorInfo />     
    </div>
  )
}

export default Doctor