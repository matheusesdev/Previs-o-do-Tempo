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

/*
O código JavaScript selecionado é usado para buscar dados de previsão do tempo de uma cidade específica usando a API OpenWeatherMap e, em seguida, exibir esses dados na página da web.

A variável [`key`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22key%22%5D "api.js") armazena a chave de API necessária para fazer solicitações à API OpenWeatherMap.

A função [`putData(dados)`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22putData(dados)%22%5D "api.js") recebe um objeto de dados que contém informações sobre a previsão do tempo para uma cidade. Essa função atualiza o conteúdo de vários elementos HTML na página com informações específicas da previsão do tempo. Por exemplo, ela atualiza o título da cidade, a temperatura, a descrição do tempo, a umidade e a imagem da previsão.

A função [`searchCity(cidade)`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22searchCity(cidade)%22%5D "api.js") é uma função assíncrona que faz uma solicitação à API OpenWeatherMap para obter dados de previsão do tempo para a cidade especificada. Ela usa a função `fetch` para fazer a solicitação HTTP e, em seguida, chama a função [`putData(dados)`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22putData(dados)%22%5D "api.js") para atualizar a página da web com os dados da previsão do tempo recebidos.

A função [`clickButton()`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22clickButton()%22%5D "api.js") é chamada quando o usuário clica em um botão na página da web. Ela lê o valor do campo de entrada da cidade, remove espaços em branco extras usando a função `trim()` e, em seguida, chama a função [`searchCity(cidade)`](command:_github.copilot.openSymbolInFile?%5B%22api.js%22%2C%22searchCity(cidade)%22%5D "api.js") para buscar e exibir a previsão do tempo para a cidade especificada. */