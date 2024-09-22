// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te he perdido entre la gente", time: 20 },
  { text: "Te he adorado y te he odiado", time: 24 },
  { text: "Y en el fondo sabes bien", time: 28 },
  { text: "Que en los peores momentos", time: 35 },
  { text: "Llevas dentro un ángel negro", time: 39 },
  { text: "Que nos hunde a los dos", time: 44 },
  { text: "Y cuando llega el nuevo día", time: 50 },
  { text: "Me juras que cambiarías sí", time: 54 },
  { text: "Pero vuelves a caer", time: 58 },
  { text: "Te dolerá todo el cuerpo", time: 66 },
  { text: "Me buscarás en el infierno", time: 69 },
  { text: "Porque soy igual que tú", time: 73 },
  { text: "Todo lo que siento por ti", time: 80 },
  { text: "Sólo podría decirlo así", time: 86 },
  { text: "Todo lo que siento por ti", time: 95 },
  { text: "Sólo sabría decirlo así", time: 101 },
  { text: "Para viajar a otros planetas", time: 110 },
  { text: "Por corrientes circulares", time: 114 },
  { text: "Te di una cápsula especial", time: 118 },
  { text: "Pero ahora tú cabeza", time: 125 },
  { text: "Es una tormenta de arena", time: 129 },
  { text: "Y cada noche una espiral", time: 134 },
  { text: "Y cuando llega el nuevo día", time: 140 },
  { text: "Me juras que cambiarías sí", time: 144 },
  { text: "Pero vuelves a caer", time: 149 },
  { text: "Te dolerá todo el cuerpo", time: 155 },
  { text: "Me buscarás en el infierno", time: 159 },
  { text: "Porque soy igual que tú", time: 164},
  { text: "Todo lo que siento por ti", time: 170 },
  { text: "Sólo podría decirlo así", time: 177 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);