import React, { Component } from 'react';
import Home from 'front_page/home/home.jsx'
import Sidebar from 'front_component/sidebar/sidebar.jsx';

class front extends Component {
  render() {  
    return (
      <div className="front">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    );
  }
}

export default front