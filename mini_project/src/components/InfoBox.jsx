import React, { Component } from 'react';

export default class InfoBox extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="p-4 bg-blue-50 border-l-4 border-blue-300 rounded">
        <div className="font-semibold">{title}</div>
        <div className="text-sm">{children}</div>
      </div>
    );
  }
}
