import React from 'react'
import GuideText from './GuideText';
const Output = () => {
  return (
    <div>
        <GuideText guide="Encrypted Message" />
        <textarea  className='output-box'></textarea>
    </div>
  )
}

export default Output;