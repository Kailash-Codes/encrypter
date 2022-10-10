import React from 'react';
import Button from './Button';
import GuideText from './GuideText';

const Input = () => {
  return (
    <div>
    <GuideText guide="Enter your message" />
        <input type="text" id="input" placeholder='Message....' />
        <br/>
        <Button buttonClass="button" buttonName="Encrypt"/><br/><br/>
    </div>
  )
}

export default Input;