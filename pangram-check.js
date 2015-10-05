(function() {
  var AlphabetInput = React.createClass({
    render: function() {
      return (
        <div className="alphabet-input">
          <label for="alphabet">Alphabet: </label>
          <input type="text" id="alphabet" value="abcdefghijklmnñoprstuvwxyz" />
        </div>
      );
    }
  });

  var PangramInput = React.createClass({
    render: function() {
      return (
        <div className="pangram-input">
          <label for="pangram">Pangram: </label>
          <input type="text" id="pangram" value="El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza." />
        </div>
      );
    }
  });

  var PangramChecker = React.createClass({
    render: function() {
      return (
        <div className="pangram-checker">
          <AlphabetInput />
          <PangramInput />
        </div>
      );
    }
  });

  React.render(
    <PangramChecker />,
    document.getElementById('pangram-checker')
  );
}());
