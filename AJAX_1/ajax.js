function loadDoc(str) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "gethint.php?q="+str, true);
  xmlhttp.send();
}

window.addEventListener("load", function() {
  var head = document.getElementById("head");
  var letters = ["A","j","a","x "," t","e","x","t "," c","h","a","n","g","e","r",];




  function animate1() {
      head.innerHTML = "";
      for (i = 0; i < letters.length; i++ ) {
        letters2 = document.createElement('span');
        letters2.innerHTML = letters[i];
        letters2.style.color = "rgb(" + rndNumber() + "," + rndNumber() + "," + rndNumber() + ")";
        head.appendChild(letters2);
      }
  }


  setInterval(animate1, 90);

})

function rndNumber() {
  return Math.floor(Math.random() * 350);
}
