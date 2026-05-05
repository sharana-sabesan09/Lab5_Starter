// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("DOM fully loaded and parsed. Initializing...");

  // adds needed variables
  const selected = document.querySelector("#horn-select");
  const myImg = document.querySelector('img');
  const myAud = document.querySelector('.hidden');

  const button = document.querySelector('button');

  const slider = document.querySelector('#volume');

  // set initial volume based on slider
  myAud.volume = slider.value / 100; 
  
  const volumeIcon = document.querySelector('#volume-controls img');



  // depending on what selector change image
  function changeImageAndAudio() {
    // finds out what option was selected & prints
    const selectedOption = document.querySelector('#horn-select option:checked');
    console.log("Selected option:", selectedOption.value);

    // depending on what selector change image

    if(selectedOption.value == "air-horn") {
      myImg.src = "assets/images/air-horn.svg";
      myAud.src = "assets/audio/air-horn.mp3";
    } else if (selectedOption.value == "car-horn") {
      myImg.src = "assets/images/car-horn.svg";
      myAud.src = "assets/audio/car-horn.mp3";
    } else if (selectedOption.value == "party-horn") {
      myImg.src = "assets/images/party-horn.svg";
      myAud.src = "assets/audio/party-horn.mp3";
    }
  }

  function changeVolume() {
    const volumeValue = slider.value;
    console.log("Volume slider value:", volumeValue);

    if (volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

    // change the audio volume
    myAud.volume = volumeValue / 100;
  }

  selected.addEventListener("change", changeImageAndAudio);
  button.addEventListener("click", function() {
    myAud.play();

    // add confetti if party horn is selected
    const selectedOption = document.querySelector('#horn-select option:checked');

    if(selectedOption.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
    }
  });

  slider.addEventListener("input", changeVolume);
}