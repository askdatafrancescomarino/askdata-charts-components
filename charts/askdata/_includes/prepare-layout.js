  function calculateScreen() {
    var w = window.innerWidth;
    var h = w/2;
    document.getElementById("container").style.width =  w + "px";
    document.getElementById("container").style.height = h + "px";

  }

  calculateScreen()