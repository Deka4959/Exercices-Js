



function changeImage(){
    const image = document.querySelector("#image")

    image.setAttribute('src', 'https://images.unsplash.com/photo-1761839257513-a921710a4291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8');

    const url = prompt("soo gali link kaaga fadlan")
    image.setAttribute('src', url)
   


  const border = prompt("Enter your border color")
 image.style.border = "2px solid" +border;
 

  const width = prompt("Enter yor width", "200px")
  image.style.width =width;
 const height = prompt("Enter yor height", "300px")
 image.style.height = height;


}