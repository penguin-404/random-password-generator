const passwordBox = document.getElementById("password");

const number = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!#$%&*()[]\/<>";
const allChar = number+upperCase+lowerCase+symbol;

function generatePassword(){
    let password = "";
    let length = 12;

    password += number[Math.floor(Math.random()*number.length)]
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]

    while(length>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)]
    }

    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}