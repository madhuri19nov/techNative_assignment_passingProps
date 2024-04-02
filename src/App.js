import React from 'react';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';

import './App.css'
const ParentComponent = () => {
  const count = 0;
 

  return (
    <div className='parent-container'>
      <ChildComponent1 count ={count}/>    
      <ChildComponent2 count  ={count}/>
    </div>
  );
}

export default ParentComponent;
