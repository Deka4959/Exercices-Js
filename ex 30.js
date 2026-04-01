function operate (a,b , callback){
    return callback(a,b)

}
function add(a,b){
   return  a + b;
}
function subtract (a,b){
    return a-b;

}
function multiply(a,b){
    return a*b;
}
function division (a,b){
    return a/b;
}
console.log("addition:", operate(3,6, add))
console.log("subtraction:", operate(4,9, subtract))
console.log("multiplication", operate(6,8, multiply))
console.log("divition", operate(6,9, division))
