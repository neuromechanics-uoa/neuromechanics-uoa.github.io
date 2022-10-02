function beep(frequency, duration, finishedCallback) {
    var ctxClass = window.audioContext || window.AudioContext || window.AudioContext || window.webkitAudioContext;
    var ctx = new ctxClass();
    var order = 0;
    
    mytext.textContent = 'beep ' + frequency;
    duration = +duration;

    if (typeof finishedCallback != "function") {
        finishedCallback = function () {};
    }

    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.gain.value = 10;

    osc.type = "sine";
    osc.frequency.value = frequency;

    osc.connect(ctx.destination);
    if (osc.noteOn) osc.noteOn(0);
    if (osc.start) osc.start();

    setTimeout(function () {
        if (osc.noteOff) osc.noteOff(0);
        if (osc.stop) osc.stop();
        finishedCallback();
    }, duration);
};

function two_beep() {
    const rand = Math.random() < 0.5;
    low = Math.round(Math.random() * 500 + 200);
    high = low + 200;
    if (rand) {
        first = low;
        second = high;
    } else {
        first = high;
        second = low;
    }
    duration = myduration.value;
    delay = mydelay.value;
    beep(first, duration, function () {
        setTimeout(function () {
            beep(second, duration)
        }, delay)
    });
};

const mytext     = document.getElementById('text');
const checkbox   = document.getElementById('toggle');
const myduration = document.getElementById('duration');
const mydelay    = document.getElementById('delay');
var repeat_beep;
checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        mytext.textContent = 'beep on';
        interval = parseInt(myduration.value) * 2 + parseInt(mydelay.value) + 1100;
        mytext.textContent += interval;
        repeat_beep = setInterval(function () {two_beep();}, interval);
    } else {
        clearInterval(repeat_beep);
        mytext.textContent = 'beep off';
    }
});