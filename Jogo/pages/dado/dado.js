let numeroSorteado = 0;
let imgDado = document.querySelector("#imgDado");
let botaoSortear = document.querySelector("#botaoSortear");
let sorteado = document.querySelector("#sorteado");

botaoSortear.addEventListener("click", function () {
  imgDado.classList.add("animar");
  sorteado.classList.add("aparecer");

  botaoSortear.getElementsByClassName.display = "none";

  setTimeout(function () {
    numeroSorteado = getRandomInt(1, 6);

    console.log(numeroSorteado);

    imgDado.setAttribute("src", "../../img/dados/" + numeroSorteado + ".jpg");

    sorteado.textContent = "+ " + numeroSorteado;

    botaoSortear.style.display = "inline-block";

    imgDado.classList.remove("animar");
    sorteado.classList.remove("aparecer");
  }, 1750);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
