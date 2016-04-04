
import React from 'react';  
import { Link } from 'react-router'

export default React.createClass({  
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/about">About</Link></li>
         
        </ul>
         {/* add this */}
        {this.props.children}
      </div>
    )
  }
});




