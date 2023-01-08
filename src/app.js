function formatDate(timestamp) {
    // calculate the date
    let date = new Date(timestamp);
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hour}:${minutes}`
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector('#temperature');
    temperatureElement.innerHTML = response.data.temperature.current;
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = response.data.city;
    let descriptionElement = document.querySelector('#description');
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector('#humidity');
    humidityElement.innerHTML = response.data.temperature.humidity;
    let windElement = document.querySelector('#wind')
    windElement.innerHTML = response.data.wind.speed;
    let dateElement = document.querySelector('#date');
    dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "f9328ad30706aefa211bt4fddce8obf6";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);