class AlphabetInput extends React.Component {
  render() {
    return (
      <div className="alphabet-input">
        <label for="alphabet">Alphabet: </label>
        <input type="text" id="alphabet" value={this.props.value} />
      </div>
    );
  }
}

class PangramInput extends React.Component {
  render() {
    return (
      <div className="pangram-input">
        <label for="pangram">Pangram: </label>
        <input type="text" id="pangram" value={this.props.value} />
      </div>
    );
  }
}

class PangramChecker extends React.Component {
  render() {
    return (
      <div className="pangram-checker">
        <AlphabetInput value={this.props.alphabet}/>
        <PangramInput value={this.props.sentence}/>
      </div>
    );
  }
}

React.render(
  <PangramChecker alphabet="abcdefghijklmnñoprstuvwxyz" sentence="El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza." />,
  document.getElementById('pangram-checker')
);
