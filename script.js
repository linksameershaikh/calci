let container = document.getElementById("box");
let text = container.firstElementChild;

let buttons = document.querySelectorAll('button');
let btnArr = Array.from(buttons);
console.log(btnArr);

let str = "";
btnArr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            text.innerHTML=str;            
        }
        else if(e.target.innerHTML == 'AC'){
            str = ""
            text.innerHTML=str;            
        }
        else if(e.target.innerHTML == 'C'){
            str = str.substring(0,str.length-1);            
            text.innerHTML= str;
        }
        else{

            str += e.target.innerHTML;
            text.innerHTML =str;
        }
    })
})