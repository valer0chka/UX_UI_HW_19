console.log('your index.js file is loaded correclty!');

$(document).ready(function(){
    $(“#typewriter”).typewriter({
        prefix: “I’m a “,
        text: [“An art lover”, “UI/UX Designer”, “A Pommy Mommy”],
        typeDelay: 100,
        waitingTime: 1500,
        blinkSpeed: 800
    });
});



