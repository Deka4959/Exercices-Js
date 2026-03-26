//ex 24

function calculateArea(width ,height = width){
    return width * height;
}

console.log( calculateArea(4,6))



//ex 25
//spreed

const numbers =[1,2,3]
const sum =[...numbers,4,5,6]
console.log(sum)

//rest

function multiply(...numbers){

    return numbers.reduce((total,num )=> total *num ,1)
}
console.log(multiply(10,5,5))




    



