

const text = document.getElementById('Fruits')


function changeme(){

    text.textContent ="My favorite vegtable";
    
} 

function change(){
     document.getElementById("paragraph").innerHTML ="<b>strawberry</b>"
    
    
    
}
 
// ex 34

 
const list =document.querySelector("#list");
function addItem(){
    
  
    const newItem = document.createElement("li")
    newItem.textContent ='itemcusub';
    list.appendChild(newItem)
    
    
}

function removeItem(){
    

  list.removeChild(list.lastChild)


 
}








