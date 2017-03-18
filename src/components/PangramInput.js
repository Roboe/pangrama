import React, { Component } from 'react';

class PangramInput extends Component {
  render() {
    return (
      <div className="input-container">
        <label htmlFor="pangram-input">Pangram</label>
        <input type="text" id="pangram-input" defaultValue={this.props.sentence}
          onChange={console.log.bind(console)} />
      </div>
    );
  }
}

export default PangramInput;
