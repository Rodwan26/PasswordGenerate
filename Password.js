const copie = document.getElementById("copie");
const Password = document.getElementById("Password");
const gnrt = document.getElementById("generate");

gnrt.addEventListener("click",generate);
function generate(){
    const upercaseLetter = "QWERTYUIOÅAPSDFGHJKLÖZXCVBNMÄ";
    const lowercasLetter = "qwertyuiopäölkjhgfdsazxcvbnmå";
    const symbol = "!#%&/=+\?^^*;><€-| _";
    const number = "1234567890";
    const letter = upercaseLetter + lowercasLetter + symbol + number;
    let password = "";
    while(password.length < 12){
        password += letter[Math.floor(Math.random() * letter.length)];
    } 
    Password.value = password;
    console.log(password);
}
copie.addEventListener("click",copiePassword);

function copiePassword(){
    Password.select();
    document.execCommand("copy");
}
