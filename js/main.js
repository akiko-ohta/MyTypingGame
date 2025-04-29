'use strict';

{
  function setWord() {
    // word = words[Math.floor(Math.random() * words.length)];
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words = [
    'red',
    'blue',
    'pink',
  ];

  let word = 'red';
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  // word = words[Math.floor(Math.random() * words.length)];
  // target.textContent = word;
  // setWord();

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if(e.key != word[loc]) {
      return;
    }
    loc++

    // 1:_ed
    // 2:__d
    // 3:___
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsdTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsdTime} seconds!`;
        return;
      }
      setWord();
    }
  });
}