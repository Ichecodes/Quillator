const Num1 = parseFloat(prompt('Enter Number 1:'));

const Operator = prompt('Enter operator(+,-,/,*');

const Num2 = parseFloat(prompt('Enter Number 2:'));

alert('working')

let Result = 0;
if(isNaN(Num1) || isNaN(Num2)){
    alert('Wrong Input! Refresh the page and provide actual Numbers')
}else{
  
if (Operator == '+') {
  Result = Num1 + Num2 ;
} else if (Operator == '-'){
   Result = Num1 - Num2 ;
}  else if (Operator == 'x' || '*'){
   Result = Num1 * Num2 ;
}  else if (Operator == '/'){
   Result = Num1 / Num2 ;
}  

 alert(Num1+Operator+Num2+'=' + Result);

}
// 


