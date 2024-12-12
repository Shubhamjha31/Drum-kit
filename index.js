// for button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var inside = this.innerHTML;
    makeSound(inside);
    buttonAnimation(inside);
  });
}
// for keybord press.
document.addEventListener("keydown",function(Event){
  makeSound(Event.key);
  buttonAnimation(Event.key);
})
// for making sound
function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(button.innerHTML);
      break;
  }
}
function buttonAnimation(key){
   document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){
    document.querySelector(".pressed").classList.remove("pressed");
   },100);
}