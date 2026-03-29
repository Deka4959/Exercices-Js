function message(){ 
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("success")},2000)
});
}

async  function showData(){
    let data = await message()
    console.log(data)

    console.log("hello")

   
   

}

showData()