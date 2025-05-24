window.addEventListener("load", (event) => {
  mostraTexto();
});

function mostraTexto() {
	new TypeIt("#top-heroes-title", {
    speed: 70,
    waitUntilVisible: true,
  }).go();

  	new TypeIt("#top-villains-title", {
    speed: 70,
    waitUntilVisible: true,
  }).go();
}


