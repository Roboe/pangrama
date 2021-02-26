import React from 'react';
import AlphabetInput from './AlphabetInput';
import PangramInput from './PangramInput';
import Validator from './Validator';
import NewTabLink from './presentational/NewTabLink';
import Emoji from './presentational/Emoji';

const UIHeader = () => (
  <header className="pc-header">
    <span className="pc-header--title">Pangram Checker</span>
  </header>
);

const UIMain = ({ alphabet, sentence, updateAlphabet, updateSentence }) => (
  <main className="pc-main">
    <section className="pc-main--section">
      <AlphabetInput alphabet={alphabet} updateAlphabet={updateAlphabet} />
      <PangramInput sentence={sentence} updateSentence={updateSentence} />
    </section>
    <section className="pc-main--section">
      <Validator alphabet={alphabet} sentence={sentence} />
    </section>
  </main>
);

const UIFooter = () => (
  <footer className="pc-footer">
    <span className="pc-footer--credits">
      Made by <NewTabLink url="http://virgulilla.com">@RoboePi</NewTabLink>{" "}
      <Emoji emoji="&#x1f989;" label="Owl" />
    </span>
    <span className="pc-footer--license">
      <NewTabLink url="https://github.com/Roboe/pangrama">Source</NewTabLink>{" "}
      (GPLv3)
    </span>
  </footer>
);

const UIApp = ({ header, main, footer }) => {
  return (
    <div id="pangram-checker" className="pc-structure">
      <div className="pc-structure--header">{header}</div>
      <div className="pc-structure--body">
        {main}
        {footer}
      </div>
    </div>
  );
};

const App = () => {
  const [alphabet, updateAlphabet] = useState(
    'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
  );
  const [sentence, updateSentence] = useState(
    'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'
  );

  return (
    <UIApp
      header={<UIHeader />}
      main={
        <UIMain
          alphabet={alphabet}
          sentence={sentence}
          updateAlphabet={updateAlphabet}
          updateSentence={updateSentence}
        />
      }
      footer={<UIFooter />}
    />
  );
}

export default App;
