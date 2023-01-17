const btnSaldi = document.getElementById("nascondiSaldi");
const btnWelcome = document.getElementById("nascondiWelcome");
const bloccoSaldi = document.getElementById("saldi");
const bloccoWelcome = document.getElementById("welcome");
const btnapriSaldi = document.getElementById("apriSaldi");
const btnapriWelcome = document.getElementById("apriWelcome");

const nacondiSaldi = function () {
  bloccoSaldi.classList.add("d-none");
  btnSaldi.classList.add("d-none");
  btnapriSaldi.classList.remove("d-none");
};
btnSaldi.addEventListener("click", nacondiSaldi);
const apriSaldi = function () {
  bloccoSaldi.classList.remove("d-none");
  btnSaldi.classList.remove("d-none");
  btnapriSaldi.classList.add("d-none");
};
btnapriSaldi.addEventListener("click", apriSaldi);

const chiudiWelcome = function () {
  btnWelcome.classList.add("d-none");
  bloccoWelcome.classList.add("d-none");
  btnapriWelcome.classList.remove("d-none");
};
btnWelcome.addEventListener("click", chiudiWelcome);

const apriWelcome = function () {
  btnWelcome.classList.remove("d-none");
  bloccoWelcome.classList.remove("d-none");
  btnapriWelcome.classList.add("d-none");
};
btnapriWelcome.addEventListener("click", apriWelcome);

const btnConta = document.getElementById("contaViaggi");
const viaggi = document.querySelectorAll("img");

const contaViaggi = function () {
  let nviaggi = viaggi.length;
  alert("Al momento sul sito abbiamo " + nviaggi + " proposte disponibili");
};

btnConta.addEventListener("click", contaViaggi);
const btnPulisci = document.getElementById("pulisci");
const cards = document.querySelectorAll(".card");
const btnRitorna = document.getElementById("ritorna");
const nascondiCard = function () {
  cards.forEach((el) => {
    el.classList.add("d-none");
  });
  btnPulisci.classList.add("d-none");
  btnRitorna.classList.remove("d-none");
};
btnPulisci.addEventListener("click", nascondiCard);
const mostraCard = function () {
  cards.forEach((el) => {
    el.classList.remove("d-none");
  });
  btnPulisci.classList.remove("d-none");
  btnRitorna.classList.add("d-none");
};
btnRitorna.addEventListener("click", mostraCard);
