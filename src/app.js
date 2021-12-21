function showTemperature(response) {
    console.log(response);
}
let apiKey = "d6dead253c83cdc20a4af9f0a7e2f201";
let city = "New York";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
