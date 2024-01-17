function finished(obj) {
  obj.innerHTML = "done!";
}



function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  // console.log(title.value);
  // console.log(description.value);

  //creating a child div for container div which is parent
  //and appending it as child;
  const insideDiv = document.createElement("div");
  insideDiv.innerHTML = title;
  document.getElementById("container").appendChild(insideDiv);
  const insideDiv1 = document.createElement("div");
  insideDiv1.innerHTML = description;
  document.getElementById("container").appendChild(insideDiv1);
  const button = document.createElement("button");
  button.innerHTML = "Mark as Done!";
  button.setAttribute("onclick",`finished(this)`);
  document.getElementById("container").appendChild(button);
}


