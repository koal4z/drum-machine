import React, { useEffect } from 'react';
import './App.css';
import audio1 from './sounds/102130__noirpantalon__hard-subby-kick.mp3';
import audio2 from './sounds/128632__bigjoedrummer__second-line-drum-beat-with-floor-tom.mp3';
import audio3 from './sounds/183830__airbenderbbx__bongo-drum.mp3';
import audio4 from './sounds/207169__veiler__drum-sample-1.mp3';
import audio5 from './sounds/344961__ezequieltm__tight-kick-drum.mp3';
import audio6 from './sounds/456962__funwithsound__failure-drum-sound-effect-1.mp3';
import audio7 from './sounds/506360__deleted-user-11009121__robot-drum-loop-100bpm.mp3';
import audio8 from './sounds/102130__noirpantalon__hard-subby-kick.mp3';
import audio9 from './sounds/128632__bigjoedrummer__second-line-drum-beat-with-floor-tom.mp3';

const PlayAudio = (props) => {
  const { audio, id, src } = props;

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const handlerPlaySound = () => {
    playSound();
  };

  return (
    <div className='drum-pad' id={id}>
      {id}
      <audio
        id={id.toUpperCase()}
        src={src}
        className='clip'
        onClick={handlerPlaySound}
        // onKeyDown={handlerKeyDown}
      ></audio>
    </div>
  );
};

const App = () => {
  const audio_q = new Audio(audio1);
  const audio_w = new Audio(audio2);
  const audio_e = new Audio(audio3);
  const audio_a = new Audio(audio4);
  const audio_s = new Audio(audio5);
  const audio_d = new Audio(audio6);
  const audio_z = new Audio(audio7);
  const audio_x = new Audio(audio8);
  const audio_c = new Audio(audio9);

  return (
    <div className='App'>
      <div id='drum-machine'>
        <div id='display'>screen</div>
        <div className='drum-pads'>
          <PlayAudio src={audio1} audio={audio_q} id='q' />
          <PlayAudio src={audio2} audio={audio_w} id='w' />
          <PlayAudio src={audio3} audio={audio_e} id='e' />
          <PlayAudio src={audio4} audio={audio_a} id='a' />
          <PlayAudio src={audio5} audio={audio_s} id='s' />
          <PlayAudio src={audio6} audio={audio_d} id='d' />
          <PlayAudio src={audio7} audio={audio_z} id='z' />
          <PlayAudio src={audio8} audio={audio_x} id='x' />
          <PlayAudio src={audio9} audio={audio_c} id='c' />
        </div>
      </div>
    </div>
  );
};

export default App;
