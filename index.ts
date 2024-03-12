let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.addEventListener('DOMContentLoaded', function() {
    var numbox: HTMLInputElement = document.getElementById('numbers') as HTMLInputElement
    var symbox: HTMLInputElement = document.getElementById('symbols') as HTMLInputElement

    numbox.checked = false;
    symbox.checked = false;
})

function updateValue() {
    let slider: HTMLInputElement = document.getElementById("slider") as HTMLInputElement
    let output: HTMLInputElement = document.getElementById("sliderValue") as HTMLInputElement
    output.textContent = slider.value;
}

const sliderEl: HTMLInputElement = document.getElementById("slider") as HTMLInputElement

sliderEl.addEventListener('input', updateValue) 

function updateNumbers() {
    let numbers = document.getElementById("numbers") as HTMLInputElement
    
    if (numbers.checked) {
        characters = characters.filter(char => !/[0-9]/.test(char));
    } else {
        characters = [...characters, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
}



function updateSymbols() {
    let symbols: HTMLInputElement = document.getElementById("symbols") as HTMLInputElement
    
    if (symbols.checked) {
        characters = characters.filter(char => !/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(char));
    } else {
        characters = [...characters, "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    }
}

const numberInput = document.getElementById("numbers") as HTMLElement

numberInput.addEventListener('input', updateNumbers)

const symbolsInput = document.getElementById("symbols") as HTMLElement

symbolsInput.addEventListener('input', updateSymbols)

function generatePasswords() {

    const sliderValue = document.getElementById("sliderValue") as HTMLElement
    let passwordlength = Number(sliderValue.textContent)
    
    let sizeOfArray: number = characters.length
    
    let password1 = ""
    for (let i = 0; i < passwordlength ; i++) {
        let newCharacter = characters[Math.floor(Math.random() * sizeOfArray)]
        password1 += newCharacter
    }

    const password1El = document.getElementById("passwordOne") as HTMLElement
    password1El.textContent = password1
    
    let password2 = ""
    for (let i = 0; i < passwordlength ; i++) {
        let newCharacter = characters[Math.floor(Math.random() * sizeOfArray)]
        password2 += newCharacter
    }

    const password2El = document.getElementById("passwordTwo") as HTMLElement
    password2El.textContent = password2
}

const genBtn = document.getElementById("genPass") as HTMLButtonElement

genBtn.addEventListener('click', generatePasswords)

function copy(elementId) {

    const textElement = document.getElementById(elementId) as HTMLElement
    
    let textToCopy: string = textElement.innerText;

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;

    document.body.appendChild(tempTextArea);

    tempTextArea.select();

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    let copyText = document.getElementById(elementId) as HTMLInputElement;
    copyText.innerText = "Password copied!";

      
    setTimeout(function() {
        copyText.innerText = textToCopy;
    }, 2000); 
}

document.addEventListener('click', (e) => {

    const target = e.target as HTMLElement

    if(target.id === "passwordOne") {
        copy('passwordOne')
    }

    if(target.id === "passwordTwo") {
        copy('passwordTwo')
    }
})