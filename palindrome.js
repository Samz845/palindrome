const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str){
    const regex = /[\W_]/g;
    const smallStr = str.toLowerCase("").replace(regex, "");
    const reversed = smallStr.split("").reverse().join("");
    return reversed === smallStr;
}

function checkPalindrome(){
    const inputText = textInput.value;
    const yesOrNo = isPalindrome(inputText)? 'is a palindrone': 'is not a palindrome';


    const pTag = `<p><strong><span>${inputText}</span></strong> ${yesOrNo}</p>`
    if(inputText.trim() === ''){
        alert('please enter a value')
    }else if(isPalindrome(inputText)){
        result.innerHTML = pTag;
    }

    else{
        result.innerHTML = pTag;
    }
}

checkButton.addEventListener('click', () =>{
    checkPalindrome();
})

