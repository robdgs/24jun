// --- Esercizi

// Creare un piccolo counter
// Partiamo dal solo body in HTML
// - Generiamo da JS due bottoni ed un DIV
// - Inseriamo gli elementi a schermo
// - Ne div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// - Aggiungere al primo bottone la funzionalità di incremento
// - Aggiungere al secondo bottone la funzionalità di decremento

// Bonus:
// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10

// Super bonus:
// Rimuovere il codice duplicato

const app = document.getElementById("app");
let count = 0;

app.innerHTML = `
<div> counter: <span id="changingNumber">0</span> </div>
<button id="btn_incr"> Increase </button>
<button id="btn_decr"> Decrease </button>
`;

const btn_incr = document.getElementById("btn_incr");
const btn_decr = document.getElementById("btn_decr");
const changingNumber = document.getElementById("changingNumber");

btn_incr.addEventListener("click", () => {
  if (count <= 9) {
    count++;
  } else if (count == 10) {
    count = 10;
  }
  //console.log(count);
  changingNumber.innerHTML = count;
});

btn_decr.addEventListener("click", () => {
  if (count == 0) {
    count = 0;
  } else if (count >= 1) {
    count--;
  }
  //console.log(count);
  changingNumber.innerHTML = count;
});
