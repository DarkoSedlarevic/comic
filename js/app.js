// color pickers - pickr
const wallpaperBackgroundColor = new Pickr({
    el: '.wallpaper-background-color',
    //cyan
    default: '#00ffff',
    // show color preview on button
    comparison: false,
    //use as button
    useAsButton: true,


    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: false
        }
    }
});
const caseBackBackgroundColor = new Pickr({
    el: '.case-back-background-color',
    //white
    default: '#FFFFFF',
    // show color preview on button
    comparison: false,
    //use as button
    useAsButton: true,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: false
        }
    }
});
const caseBackColor = new Pickr({
    el: '.case-back-color',
    //white
    default: '#ff00ff',
    // show color preview on button
    comparison: false,
    //use as button
    useAsButton: true,
    // inline: true,
    // showAlways: true,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: false
        }
    }
});

// onchange events
wallpaperBackgroundColor.on('change', (newColor) => {
  if (newColor === null) {
    console.log("unhappy");
    return;
  }
 var colorString = newColor.toHEX().toString();
 $('.wallpaper-background-color, .screensaver-container').css('backgroundColor', colorString);
  // document.querySelector('body').style.backgroundColor = colorString;
  console.log("happy: " + colorString);
});

caseBackBackgroundColor.on('change', (newColor) => {
  if (newColor === null) {
    console.log("unhappy");
    return;
  }
 var colorString = newColor.toHEX().toString();
 $('.case-back-background-color, .case-back-container').css('backgroundColor', colorString);
  // document.querySelector('body').style.backgroundColor = colorString;
  console.log("happy: " + colorString);
});

caseBackColor.on('change', (newColor) => {
  if (newColor === null) {
    console.log("unhappy");
    return;
  }
  var colorString = newColor.toHEX().toString();
  $('.case-back-color').css('backgroundColor', colorString);
  $('.case-back .b, .case-back-serial .l').css("fill", colorString);
});


//TEST PICKER VISIBLE IN CONTAINER

const testColor = new Pickr({
    el: '.test-picker',
    //white
    default: '#ff00ff',
    // show color preview on button
    comparison: false,
    //use as button
    useAsButton: true,
    inline: true,
    showAlways: true,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: false
        }
    }
});
//============================================================





//draggable case back - green sock draggable
Draggable.create(".draggable", {
 zIndexBoost:false
});

// center case back -  remove translate addes from draggable
function resetTranslate() {
  var caseBack = document.querySelector(".case-back-container");
  // with tween lite for animation
  //I need to use greensock TweenLite jer definitivno opet vraca kao i za scale
  TweenLite.to(caseBack, .5, {x:0, y:0, z:0, ease:Bounce.easeOut});
};

//scaling caseback with native html5input range
// code from: https://codepen.io/chriscoyier/pen/rLgPRY
//NADJI BOLJI CODE NA KRAJU !!!!!!
var range = document.querySelector("#range");
var caseBack = document.querySelector(".case-back-container");
var sizeNum = document.querySelector(".size-num");

range.addEventListener("input", function() {
  // css scale add new transform
  //caseBack.style.transform = "scale(" + this.value + ")";
  // i need to use greensock TweenLite becouse od draggable
  TweenLite.to(caseBack, 1,{scale: this.value});
  sizeNum.innerText = "x " + this.value;
});





// full screen api plugin:
// https://github.com/sindresorhus/screenfull.js
$('#request-full-screen').click(function () {
		screenfull.request();
});





//take a screenshot with html2canvas and download with filesaver.js
function screenshotAndDownload() {

    //my experiment for faking "preparing" screensaver for download
    var overlayDiv = document.getElementById('ovrl');
    //show overlay beffore html2canvas
    overlayDiv.style.visibility = 'visible';
    // mozda dodati ispod time out function sekund dve zbog propagianja klika ===pogledati ma onaj plugin za klik  ...
    ///////////////////////////////////////////////////////////////
    html2canvas(document.body).then(function(canvas) {
        // Export canvas as a blob
        canvas.toBlob(function(blob) {
            // Generate file download
            window.saveAs(blob, 'website_screenshot.png');
        });
        //hide overlay after save
        overlayDiv.style.visibility = 'hidden';
    });

};
