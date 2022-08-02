import React from 'react'
import ResultBanner from '../../components/result/resultBanner'
import Service from '../../components/services/service'

const serviceList = () => {
  return (
    <div>
        <ResultBanner  img='/service/page-title.jpg' name='Location' />
        <Service />
    </div>
  )
}

export default serviceList