import React from 'react';

function MyAge({age, onIncrease}) {
  
  return (
    <>
      <div>
        내 나이는 { age } 입니다.
      </div>
      <button onClick={onIncrease}>+1</button>
    </>
  )
}

MyAge.defaultProps = {
  age: '몰라'
}

export default MyAge;