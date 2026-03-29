

function message(){ 
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("success")},2000)
})
}
message()
.then((data)=>
console.log(data)).catch((error)=>console.error(error));
