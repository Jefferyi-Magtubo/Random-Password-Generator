const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.addEventListener('DOMContentLoaded', function() {
    var numbox = document.getElementById('numbers')
    var symbox = document.getElementById('symbols')

    numbox.checked = false;
    symbox.checked = false;
})

function updateValue() {
    let slider = document.getElementById("slider")
    let output = document.getElementById("sliderValue")
    output.textContent = slider.value;
}

document.getElementById("slider").addEventListener('input', updateValue)

function updateNumbers() {
    let numbers = document.getElementById("numbers")
    
    if(numbers.checked) {
        characters.splice(characters.indexOf("0") , 10)
    } else if(!numbers.checked && characters.indexOf("1") === -1) {
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }
}



function updateSymbols() {
    let symbols = document.getElementById("symbols")
    
    if(symbols.checked) {
        characters.splice(characters.indexOf("~"), 30)
    } else if (!symbols.checked && characters.indexOf("~") === -1) {
        characters.push("~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/")
    }
}

document.getElementById("numbers").addEventListener('input', updateNumbers)

function generatePasswords() {
    let passwordlength = Number(document.getElementById("sliderValue").textContent)
    
    let sizeOfArray = characters.length
    
    let password1 = ""
    for (let i = 0; i < passwordlength ; i++) {
        let newCharacter = characters[Math.floor(Math.random() * sizeOfArray)]
        password1 += newCharacter
    }
    document.getElementById("passwordOne").textContent = password1
    
    let password2 = ""
    for (let i = 0; i < passwordlength ; i++) {
        let newCharacter = characters[Math.floor(Math.random() * sizeOfArray)]
        password2 += newCharacter
    }
    document.getElementById("passwordTwo").textContent = password2
}

document.getElementById("genPass").addEventListener('click', generatePasswords)

function copy(elementId) {
      let textToCopy = document.getElementById(elementId).innerText;

      let tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;

      document.body.appendChild(tempTextArea);

      tempTextArea.select();

      document.execCommand("copy");

      document.body.removeChild(tempTextArea);

      let copyText = document.getElementById(elementId);
      copyText.innerText = "Password copied!";

      
      setTimeout(function() {
        copyText.innerText = textToCopy;
      }, 2000); 
    }

document.addEventListener('click', (e) => {
    if(e.target.id === "passwordOne") {
        copy('passwordOne')
    }

    if(e.target.id === "passwordTwo") {
        copy('passwordTwo')
    }
})