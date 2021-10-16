
const wrapper = document.querySelector('.wrapper'),
inputPart = wrapper.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('input'),
locationBtn = inputPart.querySelector('button');

inputField.addEventListener("keyup", e => {

    // if user pressed enter btn and input value in not empty
    if (e.key == "Enter" && inputField.value !== "") {
        requestApi(inputField.value);
    }
});




locationBtn.addEventListener("click", ()=>{
    if (navigator.geolocation) { // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        console.log("Your browser doesn't support geolocation api");
    }
});

function onSuccess(position) {
    const { latitude, longitude} = position.coords; // getting lat and longitude of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    // This is enough 28:54

    
    
}


function onError(err) {
    infoTxt.innerHTML = err.message;
    infoTxt.classList.add("error");

}
let apiKey; 


function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
}

function weatherDetails(info) {
    console.log(info);
}






