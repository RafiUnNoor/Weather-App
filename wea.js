const apiKey = "f5e44ee7d8dfbccf623e9c9d28bd93f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const bgImage = document.querySelector("#full");

async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#location_name").innerHTML = data.name;
    document.querySelector("#temparature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector("#weather_info").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main== "Clouds"){
        weatherIcon.src="images/clouds.png";
        bgImage.style.backgroundImage = "url('images/clouds_sky.jpg')";
    }else if (data.weather[0].main== "Clear"){
        weatherIcon.src="images/clear.png";
        bgImage.style.backgroundImage = "url('images/clear_sky.jpg')";
    }else if (data.weather[0].main== "Rain"){
        weatherIcon.src="images/rain.png";
        bgImage.style.backgroundImage = "url('images/rainy_sky.jpg')";
    }else if (data.weather[0].main== "Drizzle"){
        weatherIcon.src="images/drizzle.png";
        bgImage.style.backgroundImage = "url('images/drizzle_sky.jpg')";
    }else if (data.weather[0].main== "Mist"){
        weatherIcon.src="images/mist.png";
        bgImage.style.backgroundImage = "url('images/mist_sky.jpg')";
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
} )