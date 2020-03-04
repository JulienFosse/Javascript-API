function playmusic(sound, note) {
  //   const notesong = new Audio("./assets/son/" + note + ".wav");
  //   notesong.play();
  var piano = Synth.createInstrument("piano");
  piano.play(sound, note, 2);
}

document.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.keyCode === 65) playmusic("C", 4);
  else if (event.keyCode === 90) playmusic("D", 4);
  else if (event.keyCode === 69) playmusic("E", 4);
  else if (event.keyCode === 82) playmusic("F", 4);
  else if (event.keyCode === 84) playmusic("G", 4);
  else if (event.keyCode === 89) playmusic("A", 4);
  else if (event.keyCode === 85) playmusic("B", 4);
  else if (event.keyCode === 73) playmusic("C", 5);
});
