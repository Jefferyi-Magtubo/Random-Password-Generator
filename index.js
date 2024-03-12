var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
document.addEventListener('DOMContentLoaded', function () {
    var numbox = document.getElementById('numbers');
    var symbox = document.getElementById('symbols');
    numbox.checked = false;
    symbox.checked = false;
});
function updateValue() {
    var slider = document.getElementById("slider");
    var output = document.getElementById("sliderValue");
    output.textContent = slider.value;
}
var sliderEl = document.getElementById("slider");
sliderEl.addEventListener('input', updateValue);
function updateNumbers() {
    var numbers = document.getElementById("numbers");
    if (numbers.checked) {
        characters = characters.filter(function (char) { return !/[0-9]/.test(char); });
    }
    else {
        characters = __spreadArray(__spreadArray([], characters, true), ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], false);
    }
}
function updateSymbols() {
    var symbols = document.getElementById("symbols");
    if (symbols.checked) {
        characters = characters.filter(function (char) { return !/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(char); });
    }
    else {
        characters = __spreadArray(__spreadArray([], characters, true), ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"], false);
    }
}
var numberInput = document.getElementById("numbers");
numberInput.addEventListener('input', updateNumbers);
var symbolsInput = document.getElementById("symbols");
symbolsInput.addEventListener('input', updateSymbols);
function generatePasswords() {
    var sliderValue = document.getElementById("sliderValue");
    var passwordlength = Number(sliderValue.textContent);
    var sizeOfArray = characters.length;
    var password1 = "";
    for (var i = 0; i < passwordlength; i++) {
        var newCharacter = characters[Math.floor(Math.random() * sizeOfArray)];
        password1 += newCharacter;
    }
    var password1El = document.getElementById("passwordOne");
    password1El.textContent = password1;
    var password2 = "";
    for (var i = 0; i < passwordlength; i++) {
        var newCharacter = characters[Math.floor(Math.random() * sizeOfArray)];
        password2 += newCharacter;
    }
    var password2El = document.getElementById("passwordTwo");
    password2El.textContent = password2;
}
var genBtn = document.getElementById("genPass");
genBtn.addEventListener('click', generatePasswords);
function copy(elementId) {
    var textElement = document.getElementById(elementId);
    var textToCopy = textElement.innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    var copyText = document.getElementById(elementId);
    copyText.innerText = "Password copied!";
    setTimeout(function () {
        copyText.innerText = textToCopy;
    }, 2000);
}
document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.id === "passwordOne") {
        copy('passwordOne');
    }
    if (target.id === "passwordTwo") {
        copy('passwordTwo');
    }
});
