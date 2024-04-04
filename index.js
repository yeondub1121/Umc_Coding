const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");  


increase.onclick = () => {  
  const current = parseInt(number.innerText, 10);  
  number.innerText = current + 1;
}; 

decrease.onclick = () => {  
    const current = parseInt(number.innerText, 10);  
    number.innerText = current - 1;
};  


console.log(number);
console.log(increase);
console.log(decrease);

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

const btns = document.querySelectorAll('button');
console.log(btns);