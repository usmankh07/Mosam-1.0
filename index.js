
const wrapper = document.querySelector('.wrapper'),
inputPart = wrapper.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('input'),
locationBtn = inputPart.querySelector('button');


// Keyup is used whenever any key is released from the keyboard
inputField.addEventListener("keyup", e => {

    // if user pressed enter btn and input value in not empty
    if (e.key == "Enter" && inputField.value !== "") {
        requestApi(inputField.value);
    }
});

let api;
let apiKey;


function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(result);
   
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
 




function weatherDetails(info) {
    console.log(info);
}






