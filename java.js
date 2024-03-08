
const apikey="0ab4480fcfc317a0434ded82026628b8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");



async function checkweather(city){
    const response=await fetch(apiUrl+ city +`&appid=${apikey}`);
    if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if (data.weather[0].main == "clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "snow") {
        weathericon.src = "images/snow.png";
    } else if (data.weather[0].main == "mist") {
        weathericon.src = "images/mist.png";
    } else if (data.weather[0].main == "drizzle") {
        weathericon.src = "images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
    
    
}



searchBtn.addEventListener("click",()=> {
checkweather(searchBox.value);
})












