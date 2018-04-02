import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tag.styl'

export default class Tag extends Component {
  render() {
    return (
      <Link to="/" className="tag">{this.props.name}</Link>
    )
  }
}