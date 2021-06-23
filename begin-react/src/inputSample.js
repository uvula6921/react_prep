import React, { useState } from 'react';

function InputSample() {
  const [text, change] = useState('');
  
  const onChange = (e) => {
    change(e.target.value)
  }
  
  const onReset = () => {
    change('')
  }
  
  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  )
}

export default InputSample;