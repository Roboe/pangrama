class AlphabetInput extends React.Component {
  constructor() {
    super();
    this.state = {
      alphabet: '',
    };
  }

  componentDidMount() {
    this.setState({ alphabet: this.prepareAlphabet(this.props.alphabet) });
  }

  prepareAlphabet(alphabet) {
    return alphabet.trim().toLowerCase();
  }

  update(event) {
    this.setState({ alphabet: this.prepareAlphabet(event.target.value) });
  }

  render() {
    return (
      <div className="alphabet-input">
        <label htmlFor="alphabet">Alphabet: </label>
        <input type="text" id="alphabet" defaultValue={ this.props.alphabet }
          onChange={ this.update.bind(this) } />
      </div>
    );
  }
}
AlphabetInput.propTypes = {
  alphabet: React.PropTypes.string,
};
AlphabetInput.defaultProps = {
  alphabet: 'abcdefghijklmnoprstuvwxyz',
};

class PangramInput extends React.Component {
  render() {
    return (
      <div className="pangram-input">
        <label htmlFor="pangram">Pangram: </label>
        <input type="text" id="pangram" defaultValue={this.props.sentence}
          onChange={console.log.bind(console)} />
      </div>
    );
  }
}
PangramInput.propTypes = {
  sentence: React.PropTypes.string,
};
PangramInput.defaultProps = {
  sentence: 'The quick brown fox jumps over the lazy dog',
};

class PangramChecker extends React.Component {
  render() {
    return (
      <div className="pangram-checker">
        <AlphabetInput alphabet={this.props.alphabet}/>
        <PangramInput sentence={this.props.sentence}/>
      </div>
    );
  }
}
PangramChecker.propTypes = {
  alphabet: React.PropTypes.string,
  sentence: React.PropTypes.string,
};

React.render(
  <PangramChecker alphabet="abcdefghijklmnñoprstuvwxyz" sentence="El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza." />,
  document.getElementById('pangram-checker')
);
