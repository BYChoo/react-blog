import React, { Component } from 'react';
import './button.styl'

export default class Button extends Component {
  render() {
    const className = `button button-${this.props.type}`
    return (
      <button className={className}>{this.props.name}</button>
    )
  }
} 