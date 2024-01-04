let ul = document.querySelector(".items"); //we can denote ul also incase of items
console.log(ul.parentNode);
ul.parentNode.style.color = "red"; //here it denoting to parent "Div" which is nodeSibling(parentNode)

console.log(ul.children[1]);
console.log(ul.previousElementSibling)