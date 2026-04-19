const colorPicker = document.querySelector("#colorPicker")
const colorPreview = document.querySelector("#colorPreview")
const colorHistory = document.querySelector("#colorHistory")

const clearHistoryButton = document.querySelector("#clearHistoryButton")

colorPicker.addEventListener('input', function(){
    const selectedColor = colorPicker.value;

    colorPreview.style.backgroundColor = selectedColor;

    addColor(selectedColor);
    


})

function addColor (color){
  const li = document.createElement("li");

    li.textContent = color;              
    li.style.backgroundColor = color;

colorHistory.appendChild(li)

}


clearHistoryButton.addEventListener('click',function(){
    colorHistory.innerHTML="";
    
});
