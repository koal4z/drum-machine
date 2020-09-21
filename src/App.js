import React, { useEffect, useState } from 'react';
import './App.css';
import { bankOne, bankTwo } from './sourceFlie';

const App = () => {
  console.log(bankOne);
  // console.log(bankTwo);
  const [displayName, setDisplayName] = useState('--display--');
  const playAudio = (id) => {
    const elId = document.getElementById(id);
    elId.play();
  };

  const handlerClick = (e) => {
    const name = e.target.id;
    const id = e.target.childNodes[0].id;
    console.log(name, id);
    playAudio(id);
    setDisplayName(name);
  };

  const handlerKeypress = (e) => {
    document.addEventListener('keydown', (e) => {
      const id = e.key.toUpperCase();
      const name = document.getElementById(id).parentNode.id;
      playAudio(id);
      setDisplayName(name);
    });
  };

  useEffect(() => {
    handlerKeypress();
  }, [handlerKeypress]);

  return (
    <div className="App">
      <section id="drum-machine">
        <div id="display">
          {bankOne.map((pad) => (
            <div
              key={pad.keyTrigger}
              className="drum-pad"
              onClick={handlerClick}
              id={pad.id}
            >
              <audio className="clip" src={pad.url} id={pad.keyTrigger}></audio>
              {pad.keyTrigger}
            </div>
          ))}
          <div className="soundName">{displayName}</div>
        </div>
      </section>
    </div>
  );
};

export default App;
