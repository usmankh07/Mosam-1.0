const wrapper = document.querySelector('.wrapper'),
inputPart = wrapper.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('input');

inputField.addEventListener("keyup", e => {

    // if user pressed enter btn and input value in not empty
    if (e.key == "Enter" && inputField.value !== "") {
        requestApi(inputField.value);
    }
});


let apiKey = 'a78e86f0f4624d994abc708c0c0844a7'; 

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(api).then(response => console.table(response.json()))
}




