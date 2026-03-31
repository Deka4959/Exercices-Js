

async function fetchData(){
    console.log("fetchingdata")
    // const response  = await fetch ('https://jsonplaceholder.typicode.com/photos');
      const response  = await fetch ('data.json');
    const data = await response.json();
    console.log("response" ,  data)
    


}
fetchData()