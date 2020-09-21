import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { bankOne } from './sourceFlie';

const App = () => {
  // console.log(bankOne);

  const [displayName, setDisplayName] = useState('--display--');
  const playAudio = (id) => {
    const elId = document.getElementById(id);
    elId.play();
  };

  const handlerClick = (e) => {
    const name = e.target.id;
    const id = e.target.childNodes[0].id;
    playAudio(id);
    setDisplayName(name);
  };

  const handlerPlaySound = useCallback((e) => {
    const id = e.key.toUpperCase();
    let name;
    if (document.getElementById(id)) {
      name = document.getElementById(id).parentNode.id;
    }

    if (name && id) {
      playAudio(id);
      setDisplayName(name);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handlerPlaySound);
    return () => {
      document.removeEventListener('keydown', handlerPlaySound);
    };
  }, [handlerPlaySound]);

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
