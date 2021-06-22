import React from 'react';

const MyAge = ({ age }) => {
  return (
    <div>
      내 나이는 { age } 입니다.
    </div>
  )
}

MyAge.defaultProps = {
  age: '몰라'
}

export default MyAge;