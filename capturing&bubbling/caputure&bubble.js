document.getElementById("myP1").addEventListener(
  "click",
  function () {
    alert("You clicked the white Element");
  },
  false
);

document.getElementById("myDiv1").addEventListener(
  "click",
  function () {
    alert("you clicked the orange Element");
  },
  false
);

document.getElementById("myP2").addEventListener(
    "click",
    function () {
      alert("You clicked the white Element");
    },
    true
  );
  
  document.getElementById("myDiv2").addEventListener(
    "click",
    function () {
      alert("you clicked the orange Element");
    },
    true
  );