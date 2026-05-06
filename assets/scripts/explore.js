// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('#voice-select');

  function populateVoiceList() {
    const voices = synth.getVoices();

    // reset dropdown before refilling
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice) => {
        const option = document.createElement('option');

        // show name + language so user can tell them apart
        option.textContent = `${voice.name} (${voice.lang})`;

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  // voices load async in some browsers, so repopulate when they're ready
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector('button');
  const textarea = document.querySelector('#text-to-speak');
  const faceImg = document.querySelector('#explore img');

  button.addEventListener('click', () => {
    // don't stack speech on top of itself
    if (synth.speaking) synth.cancel();

    const speak = new SpeechSynthesisUtterance(textarea.value);

    // match selected option back to a real voice object by name
    const selectedOption = voiceSelect.selectedOptions[0];
    if (selectedOption && selectedOption.value !== 'select') {
      const voices = synth.getVoices();
      speak.voice = voices.find(v => v.name === selectedOption.getAttribute('data-name')) || null;
    }

    // swap face while talking, reset when done
    speak.onstart = () => { faceImg.src = 'assets/images/smiling-open.png'; };
    speak.onend = () => { faceImg.src = 'assets/images/smiling.png'; };
    speak.onerror = () => { faceImg.src = 'assets/images/smiling.png'; };

    synth.speak(speak);
  });
}
