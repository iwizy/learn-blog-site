import React, { Component } from 'react';

export default class Input extends Component {
  onChange = (event) => {
    const value = event.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  render() {
    const { value } = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
