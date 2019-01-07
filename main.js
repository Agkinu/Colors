//vars
var color = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var jumbo = document.querySelector(".jumbotron");
var toast = document.querySelector("p");
var myNavBar = document.querySelector(".navbar")
var play_again = document.querySelector("#playAgain")
var easy_mode = document.querySelector("#easyMode")
var hard_mode = document.querySelector("#hardMode")
var colors = randomiseColors(color.length);
var correctAnswer = randomiseAnswer(color.length);

start();

hard_mode.addEventListener("click", function(){
  colors = randomiseColors(color.length);
  correctAnswer = randomiseAnswer(color.length);
  toast.textContent = "";
  jumbo.style.backgroundColor = "white"
  myNavBar.style.backgroundColor = "white"
  for (var i = 0; i < color.length; i++){
      color[i].style.background = colors[i];
      color[i].style.display= "block"
      color[i].addEventListener("click",clickEvent);
  }
});

easy_mode.addEventListener("click", function(){
  colors = randomiseColors(3);
  correctAnswer = randomiseAnswer(3);
  console.log(colors);
  console.log(correctAnswer);
  toast.textContent = "";
  jumbo.style.backgroundColor = "white"
  myNavBar.style.backgroundColor = "white"
  for (var i = 0; i < color.length; i++){
    if(colors[i]){
      color[i].style.background = colors[i];
      color[i].addEventListener("click",clickEvent);
    }else{
      color[i].style.display= "none"
    }
  }
});

play_again.addEventListener("click", function(){
  colors = randomiseColors(color.length);
  correctAnswer = randomiseAnswer(color.length);
  console.log(colors);
  console.log(correctAnswer);
  toast.textContent = "";
  jumbo.style.backgroundColor = "white"
  myNavBar.style.backgroundColor = "white"
  for (var i = 0; i < color.length; i++){
      color[i].style.background = colors[i];
      color[i].style.display= "block"
      color[i].addEventListener("click",clickEvent);
  }
});

function randomiseColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    var red = randomiseColor();
    var blue= randomiseColor();
    var green = randomiseColor();
    var myColor = "rgb("+red+", "+green+", "+blue+")";
    arr.push(myColor);
  }
  return arr;
}

function randomiseColor() {
  var randColor = Math.floor(Math.random() *256);
  return randColor;
}

function randomiseAnswer(num){
  var answer = Math.floor(Math.random() *num);
  h1.textContent ="The Color is: "+ colors[answer];
  return colors[answer];
}

function clickEvent(){
  var colorPicked = this.style.background;
  if (colorPicked==correctAnswer){
    toast.textContent = "Correct!!!";
    jumbo.style.backgroundColor = colorPicked;
    myNavBar.style.backgroundColor = colorPicked;
    play_again.textContent = "Play Again";
    for (var i = 0; i < color.length; i++){
      color[i].style.background = this.style.background;
      color[i].removeEventListener("click",clickEvent);
    }
  }else {
    toast.textContent = "Try Again";
    this.style.background = "#2e6da4";
  }
};

function start(){
  colors = randomiseColors(color.length);
  correctAnswer = randomiseAnswer(color.length);
  for (var i = 0; i < color.length; i++){
    color[i].style.background = colors[i];
    color[i].addEventListener("click",clickEvent);
  }
};
