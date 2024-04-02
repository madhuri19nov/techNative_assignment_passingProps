// ChildComponent2.js
import React from 'react';

class ChildComponent2 extends React.Component {
  render() {
    // Access props passed from parent
    const { count } = this.props;

    return (
      <div className='bg-container'>
        <h2>Count Child Component 2</h2>
        <p>Count:{count}</p>        
      </div>
    );
  }
}

export default ChildComponent2;
