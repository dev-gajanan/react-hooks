import React, {Component} from 'react';
import GenerateJoke from './CustomHooks';
import Parent from './UseCallBack/Parent';
import Memo from './UseMomo/Memo';


function App() {
  return (
    <> 
      <nav className="navbar">
        <div className='container'>
          <div className='navbar-header'>
            <a href="#" className='navbar-title'>React Hooks</a>
          </div>
        </div>
      </nav>
      <div className="section mt-60">
        <div className='container'>
          <h3>Use memo and Use callback</h3>
          <h4>Counter App</h4>
          {/* <Memo /> */}
          <Parent />
        </div>
      </div>

      <div className="section">
        <div className='container'>
           <h3>Custom Hooks in React JS</h3>
            <GenerateJoke />
         </div>
      </div>
    </>
   
  );
}

export default App;
