import React, { Component, Fragment } from 'react';
import './App.css';
import MyName from './Myname';
import MyAge from './Myage';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    const name = '빠굥'
    const value = 1;
    return (
      <Fragment>
        {
          /*
            주석
          */
        }
        {  
          1 + 1 === 2
          ? '맞다'
          : '틀리다'
        }
        {
          name === '빠굥' && <div style={style}>궁정몬이다</div>
        }
        {
          (() => {
            if (value === 1) return <div className="num">1이다</div>
            return <div>없다</div>
          })()
        }
        <MyName name={name} />
        <MyAge age="30" />
      </Fragment>
    );
  }
}

export default App;
