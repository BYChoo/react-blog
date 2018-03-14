import React, { Component } from 'react';
import './tag.styl';

export default class Tag extends Component {
  render() {
    return (
      <div className="admin-tag">
        {this.props.tagName}
        <i className="fa fa-trash-o" aria-hidden="true" style={{marginLeft: 5}}></i>
      </div>
    )
  }
} 