//ex 19

let numbers=[1,2,3,4,5]

numbers.forEach((num)=>{
    console.log("number " +num)


});

//ex 20

let fruits =["Apple", "Banana","cherry"]
const newFruit = fruits.map((fruit =>fruit.length));
console.log(newFruit)



//ex 21

const no =[1,2,3,4,5];
const multiply =no.reduce((total,multiply )=>total * multiply)
    console.log(multiply)




