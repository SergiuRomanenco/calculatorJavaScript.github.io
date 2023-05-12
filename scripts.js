let a = ''; //first number
let b = ''; // second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

//display
const out = document.getElementById('display');

//AC
document.getElementById('ac').onclick = clearAll;
function clearAll(){
    a = ''; //first number
    b = ''; //second number
    sign = ''; //sign
    finish = false;
    out.textContent = 0;
}

//buttons
document.getElementById('buttons').onclick = (event) => {
    //!buton
    if(!event.target.classList.contains('btnItem')) return; //in afara elementului
    //clear all ac
    if(event.target.classList.contains('ac')) return;

    //out.textContent = ''; //dispare 0 din display
    //primiesc butonul apasat
    const key = event.target.textContent;

    //daca am apasat 0-9 sau .
    if(digit.includes(key)){
        if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    //= - x /
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        return;
    }

    //apas =
    if(key === '='){
        if(b === '') b = a; //5+ =
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if(b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    } 

    //SUP
    if(key === 'x^2'){
        a = a * a;
        out.textContent = a;
    }

    //SQRT  
    document.getElementById('sqrt').onclick = sqrtItem;
    function sqrtItem(){
        a = Math.sqrt(a);
        out.textContent = a;
    }
}





