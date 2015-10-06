class AlphabetInput extends React.Component {
  render() {
    return (
      <div className="alphabet-input">
        <label for="alphabet">Alphabet: </label>
        <input type="text" id="alphabet" value="abcdefghijklmnñoprstuvwxyz" />
      </div>
    );
  }
}

class PangramInput extends React.Component {
  render() {
    return (
      <div className="pangram-input">
        <label for="pangram">Pangram: </label>
        <input type="text" id="pangram" value="El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza." />
      </div>
    );
  }
}

class PangramChecker extends React.Component {
  render() {
    return (
      <div className="pangram-checker">
        <AlphabetInput />
        <PangramInput />
      </div>
    );
  }
}

React.render(
  <PangramChecker />,
  document.getElementById('pangram-checker')
);
