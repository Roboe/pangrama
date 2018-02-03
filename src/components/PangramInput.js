import React, { Component } from 'react';

class PangramInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  prepareSentence(sentence) {
    return sentence.trim();
  }

  handleChange(event) {
    this.props.updateSentence(this.prepareSentence(event.target.value));
  }

  render() {
    return (
      <div className="pc-text-field">
        <input type="text" id="pangram-input" className="pc-text-field--input"
          defaultValue={this.props.sentence}
          onChange={this.handleChange}
        />
        <label htmlFor="pangram-input" className="pc-text-field--label">Pangram</label>
      </div>
    );
  }
}

export default PangramInput;
