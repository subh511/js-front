
function myFunction(){
    let list = document.getElementById("myList").children[1];

    //created a new text node;
    let newNodeList = document.createTextNode("Juice");
    
    //didnt got the position of child node[0];
    list.replaceChild(newNodeList, list.childNodes[0]);
}