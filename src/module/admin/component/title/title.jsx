import React, { Component } from 'react';
import './title.styl';

export default class Title extends Component {
  render() {
    return (
      <aside className="title">
        <span style={{marginRight:10}}><i className={'fa ' + this.props.iconName} aria-hidden="true"></i></span>
        <span>{this.props.title}</span>
      </aside>
    )
  }
} 