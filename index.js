const wrapper = document.querySelector('.wrapper'),
inputPart = wrapper.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('input');

inputField.addEventListener("keyup", e=> {

    // if user pressed enter btn and input value in not empty
    if (e.key == "Enter" && inputField.value !== "") {
        requestApi(inputField.value);
    }
});

function requestApi(city) {
    // Console.log the city
    console.log(city);
}