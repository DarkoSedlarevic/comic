



var   app = document.getElementById("app");
        step1 = document.getElementById("step-1");
        appWrap = document.getElementById("app-wrap");
        uploadVoice = new Audio('https://github.com/DarkoSedlarevic/comic/blob/master/app/voice/hello.MP3?raw=true');


           appWrap.classList.add("active");

           app.classList.add("active");

            setTimeout(function(){
                // app.classList.add("active");
                step1.classList.add("active");
                // Play sound read@ https://gomakethings.com/how-to-play-a-sound-with-javascript/
                // uploadVoice.play();
            }, 1200);  
        
            // delay voice "nice one" voice over
            setTimeout(function(){
                // Play sound read@ https://gomakethings.com/how-to-play-a-sound-with-javascript/
                uploadVoice.play();
            }, 2200);





// step 2 
function nextStep2() {
    var step1 = document.getElementById("step-1");
         step2 = document.getElementById("step-2");
        //  uploadVoice = new Audio('upload__.wav');



    step1.classList.remove("active");
    step2.classList.add("active");
     // Play sound read@ https://gomakethings.com/how-to-play-a-sound-with-javascript/
    //  uploadVoice.play();
 }

 // step 3 
 function nextStep3() {
    var step1 = document.getElementById("step-2");
         step2 = document.getElementById("step-3");
        //  uploadVoice = new Audio('upload.wav');



    step1.classList.remove("active");
    step2.classList.add("active");
     // Play sound read@ https://gomakethings.com/how-to-play-a-sound-with-javascript/
    //  uploadVoice.play();
 }

// step one
// fake upload image preview
var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    let button = document.getElementById('nextStep2')
        uploadVoice = new Audio('voice/nice-one.mp3');
        // opacity = document.getElementById('change-opacity')
    // opacity.classList.add("active")
    button.classList.add("animate-d")
    button.removeAttribute("disabled")
    // delay voice "nice one" voice over
    setTimeout(function(){
        // Play sound read@ https://gomakethings.com/how-to-play-a-sound-with-javascript/
        uploadVoice.play();
    }, 1000);
};









 function makeItPop() {
    var element = document.getElementById("app");
        step3 = document.getElementById("step-3");
        step4 = document.getElementById("step-4");
        player = document.getElementById("player"),
        play = document.getElementById("play");
     
     step3.classList.remove("active");
     step4.classList.add("active");
    //  element.classList.add("app-full-screen");

    // set timeout and then play video and hide loading
      setTimeout(function(){
          loading.style.display = "none";
          document.getElementById("player").style.display = "block";
          player.play();
          document.body.classList.add("fade-to-black")
      }, 7000);



              // on video ended 
player.onended = function() {
// hide video player
document.getElementById("player").style.display = "none";

//play happy music
let happyMusic = new Audio('elevator.mp3');
// loop
// happyMusic.onended = function() {
 // happyMusic.play()
// }
happyMusic.loop = true;
// play
happyMusic.play()

// set timeout and then play video and hide loading
setTimeout(function(){
 document.getElementById("message").style.display = "block";
}, 1000);
}; 


 } 
 
 

// step 5 - Sun is shining 
 function sunIsShining() {
    // css class has animation 
    document.body.classList.add("fade-to-yellow")
    document.getElementById("tears").classList.add("fade")
    document.getElementById("message-content").style.display = "none";
    // set timeout same as fade to yellow animation
    setTimeout(function(){
        step4.classList.remove("active");
        document.getElementById("step-5").classList.add("active");
    }, 2500);
}
 
 //make it pop end


 function handleChange() {
    // alert("e");
    let button = document.getElementById('nextStep3')
    button.classList.add("animate-d")
    button.removeAttribute("disabled");
}
