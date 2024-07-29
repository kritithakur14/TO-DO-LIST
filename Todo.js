let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {

  if (inputs.value == "") {
    alert("Please Enter Task");

  } 

  else {
    
    let newEle = document.createElement("ul"); //creating ul element
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`; //adding input value to inner HTML of ul
    text.appendChild(newEle); //adding new elements to the text
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}
