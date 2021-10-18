
const wrapper = document.querySelector('.wrapper'),
inputPart = wrapper.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('input'),
locationBtn = inputPart.querySelector('button'),
wIcon = wrapper.querySelector('.weather-part img'),
backBtn = wrapper.querySelector('header i');


// Keyup is used whenever any key is released from the keyboard
inputField.addEventListener("keyup", e => {

    // if user pressed enter btn and input value in not empty
    if (e.key == "Enter" && inputField.value !== "") {
        requestApi(inputField.value);
    }
});

let api;
let apiKey = 'a78e86f0f4624d994abc708c0c0844a7' ;


function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchData();
   
}




locationBtn.addEventListener("click", ()=>{
    if (navigator.geolocation) { // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        console.log("Your browser doesn't support geolocation api");
    }
});


// OnSuccess Function
function onSuccess(position) {
    const { latitude, longitude} = position.coords; // getting lat and longitude of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetchData();
    

}

// OnError Function
function onError(err) {
    infoTxt.innerHTML = err.message;
    infoTxt.classList.add("error");

}

// FetchData
function fetchData() {
    infoTxt.innerHTML = "Getting weather details...";
    infoTxt.classList.add("pending");

    // Getting api response and parsing it into js obj and in another callback function we called weather details to pass the result of api
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));

}
 



// Here the fun stuff is happening, where I am
function weatherDetails(info) {
    if (info.cod == "404") {
        infoTxt.innerHTML = `${inputField.value} is not a valid city name!!!`
        infoTxt.classList.replace("pending", "error");
    } else {

        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {feels_like, humidity, temp} = info.main;

        if (id == 800){
            wIcon.src = "./icons/clear.svg"
        }
        else if (id == 801 && id <= 804){
            wIcon.src = "./icons/storm.svg";
        }
        else if (id == 711){
            wIcon.src = "./icons/haze.svg";
        }
        else if (id >= 200 && id <= 232){
            wIcon.src = "./icons/storm.svg";
        }
        else if ( (id >= 300 && id <= 321) || (id >= 500 && id <= 531) ){
            wIcon.src = "./icons/rain.svg";
        }
        else if (id >= 600 && id <= 622){
            wIcon.src = "./icons/snow.svg";
        }
        else if (id >= 700 && id <= 781){
            wIcon.src = "./icons/haze.svg";
        }
        else if (id >= 700 && id <= 781){
            wIcon.src = "./icons/haze.svg";
        }


        // Let's pass these values to the html elements to actually see the results.

        wrapper.querySelector('.temp .numb').innerText = Math.round(temp);
        wrapper.querySelector('.weather').innerText = description;
        wrapper.querySelector('.column .temp .numb-2').innerText = Math.round(feels_like);
        wrapper.querySelector('.humidity .numb').innerText = humidity + '%';
        wrapper.querySelector('.location span').innerText = city + ' ' + country;

        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
    }
    console.log(info);
}

backBtn.addEventListener('click',  ()=> {
    wrapper.classList.remove("active");
})






