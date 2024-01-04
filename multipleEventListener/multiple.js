

let x = document.getElementById("myBtn");

x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction)


function myFunction(){
    alert("Hello!")
}

function someOtherFunction(){
    alert("this function got excuted!")
}