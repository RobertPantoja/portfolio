function newStyle() {
  let newColor = "";
  let x = Math.floor(Math.random() * 5);
  switch (x) {
    case 0:
      newColor = "#118ab2";
      break;
    case 1:
      newColor = "#06d6a0";
      break;
    case 2:
      newColor = "#ffd166";
      break;
    case 3:
      newColor = "#ef476f";
      break;
    case 4:
      newColor = "rgb(75, 95, 170)";
      break;
  }
  var elem = document.getElementById("surname");
  elem.style.color = newColor;
}
