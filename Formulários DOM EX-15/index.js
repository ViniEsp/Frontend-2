const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const endereco = document.querySelector("#endereco");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("select");
const cargos = document.querySelectorAll("input[name=cargo]");
const areas = document.querySelectorAll("input[type=checkbox]");
const curriculo = document.querySelector("textarea[name=curriculo]");

var areaSelecionada = false;

function validarCheckbox() {
  areas.forEach((area) => {
    if (area.checked) {
      areaSelecionada = true;
    }
  });

  if (!areaSelecionada) {
    alert("Por favor, seleciona pelo menos uma área de interesse.");
  } else {
    getValue();
  }
}

function reset() {
  nome.value = "";
  endereco.value = "";
  cidade.value = "";
  curriculo.value = "";
  areaSelecionada = false;
  checkboxes.forEach((checkbox) => {
    checkboxes.set;
  });
}

function getValue() {
  var cargoSelecionado;
  var areasDeInteresse = [];

  cargos.forEach((cargo) => {
    if (cargo.checked) {
      cargoSelecionado = cargo.value;
    }
  });

  areas.forEach((area) => {
    if (area.checked) {
      areasDeInteresse.push(area.value);
    }
  });

  const usuario = {
    nome: nome.value,
    endereco: endereco.value,
    cidade: cidade.value,
    estado: estado.value,
    cargo: cargoSelecionado,
    areas: [],
    curriculo: curriculo.value,
  };

  usuario.areas.push(areasDeInteresse);

  console.log(usuario);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCheckbox();
});