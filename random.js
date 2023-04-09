const mainChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const geneButton =document.querySelector(".generate");
let serialDiv =document.querySelector(".serial");
// 

//generate rendom chars
//console.log(mainChars.length);//36 *
// console.log(mainChars[mainChars.length -1]);

geneButton.addEventListener("click", ()=>{
    let lengthPass =document.querySelector("input").value;
    let mySerial= "";
    for(let x=0; x < lengthPass; x++){
        let genChar = Math.floor(Math.random() * mainChars.length);
        let itemChar = mainChars[genChar];
        mySerial += itemChar;
    }
    serialDiv.innerHTML = mySerial;
});

