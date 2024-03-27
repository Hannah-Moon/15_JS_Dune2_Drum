
// --------------------- {Window visit alert}

window.onload = function() {
    alert("Thanks for trying out 'Dune Part 2' Drum!\nPlease either click the button on the screen or press the key to play.");
};

// ---------------------- {Detecting button pressing}

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // alert("I got clicked!"); // Test with Alert if it works. 
        // console.log(this.style.color = "white");       //test the color

    let buttonInnerHTML = this.innerHTML;
    
    makeSounds(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML)

  });
}

// ---------------------- {Detecting keyboard pressing}

document.addEventListener("keypress", function(event) {

    // console.log(event);
    // alert("Key was pressed!")

    makeSounds(event.key);

    buttonAnimation(buttonInnerHTML)

});


function makeSounds(key) {
    let audio;
    switch (key.toUpperCase()) {
        case "D":
            audio = new Audio("MP3/D(dark-cinematic-atmosphere).mp3");
            break;
        case "U":
            audio = new Audio("MP3/U(mysterion-low-ship-humming).mp3");
            break;
        case "N":
            audio = new Audio("MP3/N(drama-cue-synth-and-cello).mp3");
            break;
        case "E":
            audio = new Audio("MP3/E(haaaa-epiphany-choir).mp3");
            break;
        case "P":
            audio = new Audio("MP3/P(lonely-synthesizer).mp3");
            break;
        case "A":
            audio = new Audio("MP3/A(mysterious-places).mp3");
            break;
        case "R":
            audio = new Audio("MP3/R(synthesizer-bubble).mp3");
            break;
        case "T":
            audio = new Audio("MP3/T(synthesizer-trumpet).mp3");
            break;
        case "2":
            audio = new Audio("MP3/2(alert-signal-on-planet-dune).mp3");
            break;
        default:
            console.log("No audio file found for key: " + key);
    }
    if (audio) {
        audio.play();
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}