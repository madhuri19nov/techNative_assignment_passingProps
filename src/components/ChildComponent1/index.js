// ChildComponent1.js
import React from 'react';
import './index.css'

class ChildComponent1 extends React.Component {
  render() {
    // Access props passed from parent
    const { count } = this.props;

    return (
      <div className='bg-container'>
        <h2>Count for ChildComponent1</h2>
        <p>Count:{count}</p>
      </div>
    );
  }
}

export default ChildComponent1;
