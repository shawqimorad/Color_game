var numSquares = 6;
var colors = generteRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
init();
function init(){
  for(var i=0; i<modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares=3 : numSquares=6;
      reset();
    });
  }
  for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor=this.style.backgroundColor;
      if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent="Play Again?"
      }
      else {
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
      }
    })
  }
  reset();
}
function reset(){
  colors = generteRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent=pickedColor;
  resetButton.textContent="New Colors";
  messageDisplay.textContent="";
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    }
    else {
      squares[i].style.display="none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function(){
  reset();
});
colorDisplay.textContent= pickedColor;
function changeColors(color){
  for(var i=0; i<colors.length; i++){
    squares[i].style.backgroundColor=color;
  }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generteRandomColors(num){
  var arr = [];
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+ r +", "+ g +", "+b+")";
}
