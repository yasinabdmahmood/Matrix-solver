import determinant from "./modules/determinant.js";
import generateDom from "./modules/updateDom.js";
import updateStyle from "./modules/updateStyle.js";


console.log(math.complex('4 - 2i')+math.complex('4 - 2i')) // 2i
 
document.querySelector('#calculate').onclick=()=>{
 const inputs=Array.from(document.querySelectorAll('.container div input')) ;
 const numbers=inputs.map((e)=>parseInt(e.value))
 const newArr = [];
 const arraySize=document.querySelector('#size').value;
while(numbers.length) newArr.push(numbers.splice(0,arraySize));
const result=determinant(newArr);
document.querySelector(".result span").innerHTML=result;
}

document.querySelector('#size').onchange=(e)=>{
 const matrixSize=e.target.value;
 const newDom=generateDom(matrixSize);
 document.querySelector(".container").innerHTML=newDom;
 updateStyle(matrixSize);
}