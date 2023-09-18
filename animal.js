var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

    for (var i = 0; i <numberOfAnimalButtons; i++) {

 document.querySelectorAll(".animal")[i].addEventListener("click", function() {
 
  var buttons = this.innerText;
 
  //passing the key  
  playSound(buttons)
 
  });

}

document.addEventListener("keydown", function(e) {
 
   
  //call the playsound and use the event
  playSound(e.key)

});

function playSound(key) {
   switch (key) {
      case "c":
        var cat = new Audio ("sounds/cat.wav");
        cat.play();
        break;
      
      case "p":
        var puppy = new Audio ("sounds/puppy.mp3");
        puppy.play();
        break;
          
      case "b":
        var bee = new Audio ("sounds/bee.wav");
            bee.play();
            break;
           
      case "m":
        var monkey = new Audio ("sounds/monkey.mp3");
            monkey.play();
            break;
      
            default:
              console.log(key)
            break
          }
        }

        function buttonAnimation(currentKey) {

          var activeButton = document.querySelector("." + currentKey);

          activeButton.classList.add("pressed");

          setTimeout(function(){
            activeButton.classList.remove("pressed");
          }, 100);
        }
   