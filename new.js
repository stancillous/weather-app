
//SELECING THE DOM ELEMENTS

const input = document.querySelector('.search')   //the input button
const searchIcon = document.querySelector('#searchBtn')   //the search icon
const citySpan = document.querySelector('.city')  //span with the city name searched for
const weatherType = document.querySelector('.weather-type')  //element showing the weather type
const weatherHumidity = document.querySelector('.humidity')   //element showing the weather description 
const weatherTemperatureSpan = document.querySelector('.weather-temperature-span') //elements showing the weather temperature
const iconImage = document.querySelector('.iconImage')  //icon for the weather type
const windSpeed = document.querySelector('.wind-speed')   //element for the wind speed 
const bgImage = document.querySelector('.bgImage')   //the background image
const weatherConditionsContainer = document.querySelector('.weather-conditions-container')   //the div containing all weather informaton

window.addEventListener('load',()=>{
    showWeatherDetails('nairobi')

})

//FUNCTION TO SHOW WEATHER DETAILS
function showWeatherDetails(cityName){
    
    setTimeout(() => {  //wait one second before displaying this 
        weatherConditionsContainer .style.display = 'block'
        
    }, 1000);  


    //SETTING THE SRC OF THE BACKGROUND IAMGE TO A RANDOM IMAGE BASED ON THE CITY NAME SEARCHED FOR


    bgImage.src = `https://source.unsplash.com/1600x900/?${cityName}`


    // bgImage.src = `https://source.unsplash.com/1600x900/?${cityName}`

    //DEFINING SOME VARIABLES FOR THE API
    let tempUnit = 'metric'
    let apiKey = 'fdf8813db0cb8371ab10c44a49b00409'
    let weatherIcon ;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${tempUnit}&APPID=${apiKey}`
    input.value = ''  //CLEARING THE INPUT AFTER USER CLICKS ON SEARCH


    fetch(apiUrl)
    .then(response => response.json())
    .then((data)=>{

        let temp = data.main.temp  ///temperature in degrees
        let humidity= data.main.humidity  //weather hummidity

        let lat = data.coord.lat  //latitude 
        let lon = data.coord.lon   //longitude
    
        let weather= data.weather[0].description  //weather 
        let icon= data.weather[0].icon  //weather icon
        let wind = data.wind.speed    //wind speed


        //weather icon href
        weatherIcon = `https://openweathermap.org/img/wn/${icon}.png`


    
    
    
    //ASSIGNING THE VALUES TO THE DOM ELEMENTS THAT WE SELCTED ABOVE
        
    citySpan.textContent = cityName;
    weatherType.textContent = weather
    weatherHumidity.textContent ='Humidity: ' + humidity + '%'
    weatherTemperatureSpan.textContent = temp ;
    iconImage.src = weatherIcon;
    windSpeed.textContent = 'Wind Speed: ' + wind + ' m/s'
    
    })




}

//EVENT LISTERNER ON THE SEARCH ICON
searchIcon.addEventListener('click',()=>{
    
    let cityName = input.value 

})


//EVENT LISTERNER FOF RHT ENTER KEY
input.addEventListener("keypress", (event)=> {
    let cityName = input.value


    if (event.keyCode === 13) { // key code of the keybord key
      event.preventDefault();
	 showWeatherDetails(cityName)
    }
  });


