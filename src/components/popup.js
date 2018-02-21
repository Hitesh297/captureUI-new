import React from 'react';
import { Component } from 'react';

class Popup extends Component {

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner bg-white rounded box-shadow'>
         
        <button className="float-right" onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;