

function calc(num){
    inputValue.value += num;
}

function allClear() {
    inputValue.value = null;   
} 

function Del() {
    
   var deLe = inputValue.value;
   inputValue.value = deLe.slice(0, deLe.length-1)   
} 

function Compute() {
  if(eval(inputValue.value) == undefined){
    inputValue.value = "";
  }else {
      inputValue.value = eval(inputValue.value);
  } 
}

