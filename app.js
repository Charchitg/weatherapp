

let button = document.querySelector('#submit');
let Input = document.querySelector('#input');


button.addEventListener('click' , () =>{
    let Input = document.querySelector('#input');
    let city = Input.value.toString().toLowerCase();
    FetchDetails(city);
} );


async function FetchDetails(city) {
    //console.log(city);
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric&appid=89c7f980abfec8b2cf2e4d03ea3bdc50';
    
    const Data = await fetch(url);
    const jsonData = await Data.json();
    
    SetDetails(jsonData);
    let Input = document.querySelector('#input');
    Input.value = "";
}


function SetDetails(jsonData){
    let mainObj = jsonData.main;
    console.log(mainObj);
    let temp = document.querySelector('.temp');
    let air_quality = document.querySelector('.air_quality');
    let visibility = document.querySelector('.visibility');
    let humidity = document.querySelector('.humidity');
    let set_time = document.querySelector('.set_time');
    let rise_time = document.querySelector('.rise_time');
    let wind_speed = document.querySelector('.wind');
    let uvinfo = document.querySelector('.uvinfo');
    let rain_info = document.querySelector('.rain_info');
    let descrip = document.querySelector('.descrip');
    let img_url = document.querySelector('#main_img');
    let img_text = document.querySelector('.img_text');


    temp.innerHTML = mainObj.temp;
    img_text.innerHTML = jsonData.name;
    visibility.innerHTML = jsonData.visibility;
    humidity.innerHTML = mainObj.humidity;
    wind_speed.innerHTML = jsonData.wind.speed;
    //descrip.innerHTML = jsonData.weather.0.description;
    rain_info.innerHTML = "No info";
    uvinfo.innerHTML = "No info";
    air_quality.innerHTML = "No info";

    let unix_timestamp1 = jsonData.sys.sunrise;
    let unix_timestamp2 = jsonData.sys.sunset;

    let DateObj1 = new Date(unix_timestamp1 * 1000);
    let DateObj2 = new Date(unix_timestamp2 * 1000);
    
    let hour1 = DateObj1.getUTCHours();
    let hour2 = DateObj2.getUTCHours();

    let min1 = DateObj1.getUTCMinutes();
    let min2 = DateObj2.getUTCMinutes();

    let sunrise_time = hour1.toString().padStart(2,'0') + ":" + min1.toString().padStart(2,'0');
    let sunset_time = hour2.toString().padStart(2,'0') + ":" + min2.toString().padStart(2,'0');

    console.log(sunrise_time , sunset_time);

    rise_time.innerHTML = sunrise_time;
    set_time.innerHTML = sunset_time;

}
