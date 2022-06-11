import React, {Component} from 'react';
import Parent from './UseCallBack/Parent';
import Memo from './UseMomo/Memo';


function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      {/* <Memo /> */}

      <Parent />
      
    </div>
  );
}

export default App;
