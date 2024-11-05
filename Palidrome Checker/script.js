

function isPalindrome(str){

const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");


const reversedStr = cleanStr.split("").reverse().join("");


return cleanStr === reversedStr;
}


function palindromeChecker(){

    const inputText = document.getElementById("inputType");
    const result = document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome!`;
    }else{
        result.textContent = `"${inputText.value}" is not a Palindrome!`;
    }

    result.classList.add("fadeIn");
    inputText.value = "";
}

document.getElementById("checkBtn").addEventListener("click",palindromeChecker);