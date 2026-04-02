async function getUser(){
    try {
        let res = await  fetch("https://jsonplaceholder.typicode.com/users")
        let result = await res.json()
        console.log(result)
      

    }
    catch(error){
        console.log(error);
        
    }

}
getUser()