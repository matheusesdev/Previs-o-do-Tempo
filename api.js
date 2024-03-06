let key = "8012a1c54c4e5dade6cd70494fc5aeb4";

function putData(dados) {
  console.log(dados);
  document.querySelector(".city-title").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function searchCity(cidade) {
  let dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  putData(dados);
}

function clickButton() {
  let cidade = document.querySelector(".input-city").value.trim();
  searchCity(cidade);
}

