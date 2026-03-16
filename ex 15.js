
const people =[

    {

        name: "Alice", 
        age: 25,
        city:"Wonderland"
    },


     {

        name:"Bob", 
        age: 30,
        city:"Bulderland"
    },

     {

        name:"Charlie", 
        age: 35,
        city:"Chocolate factory"
    }
];


for( let person of people){
    console.log("name: ", person.name)
     console.log("age: ", person.age)
      console.log("city: ", person.city)


}

for(let key in people){
    console.log(key)
    
}

