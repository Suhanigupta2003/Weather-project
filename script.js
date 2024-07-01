const cityname = document.getElementById('City'); // City input field ko select karna
const search = document.getElementById('search'); // Search button ko select karna
const box = document.getElementById('weather'); // Weather information display div ko select karna

search.addEventListener('click', (event) => {
    event.preventDefault(); // Default form submit behavior ko prevent karna
    getweather(cityname.value); // Weather fetch karne ke liye function call karna
});

async function getweather(city) {
    const apikey = 'c0639ef6c96df64847fc1b8365ead1d2'; // API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`; // API URL with city and API key

    try {
        const response = await fetch(url); // API se data fetch karna
        const data = await response.json(); // Response ko JSON me convert karna
         show(data); // Data ko show function ke through display karna
    } catch (error) {
        console.log("error", error); // Error ko console me log karna
    }
};

const show = (data) => {
    box.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `; // Weather information ko HTML me set karna
    box.classList.remove('hidden'); // Hidden class ko remove karna
    box.classList.add('visible'); // Visible class ko add karna
};