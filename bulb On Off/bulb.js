
const bulb = document.getElementById('bulb');
const message = document.getElementById('message');

function bulbOn(){
    bulb.src="../public/img/bulbOn.png";
    message.innerHTML="Bulb is On!";
}

function bulbOff(){
    bulb.src="../public/img/bulbOff.png";
    message.innerHTML="Bulb is Off!";
}