class AlphabetInput extends React.Component {
  render() {
    return (
      <div className="alphabet-input">
        <label htmlFor="alphabet">Alphabet: </label>
        <input type="text" id="alphabet" defaultValue={this.props.value} />
      </div>
    );
  }
}

class PangramInput extends React.Component {
  render() {
    return (
      <div className="pangram-input">
        <label htmlFor="pangram">Pangram: </label>
        <input type="text" id="pangram" defaultValue={this.props.value} />
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
