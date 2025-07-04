

// ✅ Common cod Values:
// Code	Meaning
// 200	✅ Success — data found
// 404	❌ City not found
// 401	❌ Unauthorized (invalid API key)
// 429	❌ Too many requests (rate limit)
// 500	❌ Server error


const apiKey = process.env.API_KEY;

async function getWeather(){
    const cityInput = document.getElementById('cityInput').value;
    if(!cityInput){
        alert("Please Enter the City Name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    try{
        const respone = await fetch(url);
        const data = await respone.json();

        if(data.cod === 200){
            const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temp: ${data.main.temp} °C</p>
            <p>🌥️ Condition: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind: ${data.wind.speed} m/s</p> 
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        }else{
            document.getElementById('weatherInfo').innerHTML = `City Not Found`;
        }

    }catch{
        document.getElementById('weatherInfo').innerHTML = `<p>Data Not Fetch</p>`;
        console.log(Error);
        
    }

    getWeather();
} 
