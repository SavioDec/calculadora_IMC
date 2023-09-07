//capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("peso invalido", false);
    return;
  }

  if (!altura) {
    setResultado("altura invalida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(mensagem, true);
});
/*
menos do que 18,5 abaixo do peso
entre 18,5 e 24,9 peso normal
entre 25 e 29,9 sobrepeso
entre 30 e 34,9 obesidade grau1
entre 34,9 e 39,9 obesidade grau2
mais do que 40 obesidade grau3
*/

function getNivelImc(imc) {
  const nivel = [
    `abaixo do peso`,
    `peso normal`,
    `sobrepeso`,
    `obesidade grau1`,
    `obesidade grau2`,
    `obesidade grau13`,
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  function criaP(className) {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
      p.classList.add("paragrafo-resultado");
    } else {
      p.classList.add("bad");
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p);
  }

