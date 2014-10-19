// //set up oscillator
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// oscillator = audioCtx.createOscillator();
// var gainNode = audioCtx.createGain();
// oscillator.connect(gainNode);
// gainNode.connect(audioCtx.destination);
// oscillator.type = 0; // sine wave
// oscillator.frequency.value = 0; // value in hertz

//set up key mapping
sounds = [];
for(i=0; i<222; i++) {
  sounds[i] = '' + i + '.wav';
};

//capture keystrokes of a message
var keys = document.getElementById("keyStrokes");
keys.addEventListener("keydown", captureKeys, false);

var message = [];
var counter = 0;

function captureKeys(e){
  playKey(e.keyCode);
  if (counter < 16) {
    message[counter] = e.keyCode;    
    counter += 1;
    console.log(message);
    //make sure to set up play key sound here!!
  } else {
    message[counter] = e.keyCode;
    message.length = 16;
    counter = 0;
    console.log(message);
  }
};

//play sound for each key hit
function playKey(e){
  document.getElementById(e).play();
};

//play message
function playMessage() {
  i = 0;
  if (message.length == 0) {
    alert("Please leave a message for me to play!");
  } else {
    window.setInterval( function changeSounds() {
      if (i > message.length) {
        i = 0;
        playKey(message[i]);
      } else {
        playKey(message[i]);
        i += 1;
      };
      console.log(message);
      console.log(i);
  }, 1500);
  }
};


//play message after user clicks listen
function playMessageTwo() {
  oscillator.start();
  i = 0;
  if (message.length == 0) {
    alert("Please leave a message for me to play!");
  } else {
    window.setInterval( function changeFrequency() {
      if (i > message.length) {
        i = 0;
        oscillator.frequency.value = (message[i] * 10);
      } else {
        oscillator.frequency.value = (message[i] * 10);
        i += 1;
      };
      console.log(message);
      console.log(oscillator.frequency.value);
  }, 1500);
  }
};
