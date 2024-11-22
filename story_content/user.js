function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ulBuTWPict":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src= "Backsound ceria untuk video pembelajaran Instrumen Musik Ceria.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

