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
  //$('.case-back-color').css('backgroundColor', colorString);
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
            hsva: false,
            input: true,
            clear: false,
            save: false
        }
    }
});




// button click
// $('.color-container').hide();

$('.close-picker-container').click(function () {
		// $('.color-container').show();
    // $('.color-container').hide();
    TweenLite.fromTo ($('.color-container') , 0.3, {bottom:80, opacity:1}, {bottom:0, opacity:0, display:'none'})  //animate with TweenLite
});

// When the user clicks anywhere outside of the color picker, close it
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_close
// https://gomakethings.com/detecting-clicks-outside-of-an-element-with-vanilla-javascript/
// var colorPickerContainer = document.querySelector('.pcr-app')
// window.onclick = function(event) {
//   if (event.target == colorPickerContainer) {
//     //colorPickerContainer.style.display = 'none';
//     //alert("bu")
//   }
//   else {
//     colorPickerContainer.style.display = 'none';
//     // alert("bu")
//   }
// }
// // Listen for all clicks on the document
document.addEventListener('click', function (event) {

    // If the click happened inside the the container, bail
    //if user cliks  li button or color picker container do nothing
    if (event.target.closest('.color-container, .position-test')) return;

    // Otherwise, run our code...
    console.log('outside');
    TweenLite.fromTo ($('.color-container') , 0.3, {bottom:90, opacity:1}, {bottom:-300, opacity:1, display:'none'})  //animate with TweenLite


}, false);

// $('.color-container').on("click", function(event){
//   // If the click happened inside the the container, bail
//   if (event.target.closest('.visible')) return;
//
//   // Otherwise, run our code...
//   console.log('outside');
//   TweenLite.fromTo ($('.color-container') , 0.4, {bottom:80, opacity:1}, {bottom:0, opacity:0, display:'none'})  //animate with TweenLite


// });



// test position of element
// use http://api.jquery.com/width/ to see iz menu width =<> body width
//and then position the container
//added for each so i can have same class on all buttons
$('.position-test').each(function(index) {
    $(this).on("click", function(){
// $(".position-test").click(function(){
  // MY iDEA:
  // if: 	picker btn position left + picker container width = or < body width
  //    show container top left of the btn
  // else:  simulate css - left 50% - margin minus 50% of elements width (dinamicly) - so i can set manualy in css difrent width's of container
  var bodyWidth = $('body').width();
      colorPickerWidth = $('.color-container').outerWidth();
      colorPickerHalfWidth = -(colorPickerWidth/2);
      //btnPosition = $(".position-test").offset(); // retrieve the current position of an element relative to the document -read jquery docs
      btnPosition = $(this).offset(); // retrieve the current position of  clicked element  relative to the document -read jquery docs
      colorFor = this.getAttribute("data-picker-for");//get data atribute of clicked button
      //colorFor = this.getAttribute("data-picker-for");//get data atribute of clicked button




  // var menuWidth = $('.controls-menu-ul li').outerWidth();
  //sum all li items from: https://stackoverflow.com/questions/25409750/calculate-width-by-the-sum-of-all-childs
  // var menuWidth = 0;
  // $('.controls-menu li').each(function() {
  //       menuWidth += $(this).outerWidth(true);
  //   });
  // var x = $("#position-test").position(); // retrieve the current position of an element relative to the offset parent -read jquery docs
  console.log('body width: ' + bodyWidth + 'px');
  console.log('color picker container width: ' + colorPickerWidth + 'px');
  console.log('clicked li position: ' + btnPosition.left + 'px');

  if(btnPosition.left + colorPickerWidth <=  bodyWidth) {
    //show container top left of the btn
    $('.color-container').css({"left" : btnPosition.left, "margin-left" : "10px" }); // add margin for li element padding
    TweenLite.fromTo ($('.color-container') , 0.3, {bottom:-300, opacity:0}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite
  }
  else {
    // simulate css - left 50% - margin 50% of elements width - so i can change manualy in css difrent width's of container
    // $('.color-container').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth }).show();
    $('.color-container').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth });
    TweenLite.fromTo ($('.color-container') , 0.3, {bottom:-300, opacity:0}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite

    // $('.color-container').addClass('color-container-center').toggle();
  }


  // $('.color-container').css("left", x.left).toggle();
  // $('.color-container').css({"left" : x.left, "margin-left" : "10px" }).toggle(); // add margin for li element padding

  // alert("Top position: " + x.top + " Left position: " + x.left);

///////////////////////////////////////////////////////////
// control on change pickr event with data atributes
console.log('data-atribute: ' + colorFor); // just for testing delete

testColor.on('change', (newColor) => {
  if (newColor === null) {
    console.log("unhappy");
    return;
  }
  else if(colorFor == 'wallpaper-background-color') {
      var colorString = newColor.toHEX().toString();
      $('.screensaver-container').css('backgroundColor', colorString);
  }
  else if(colorFor == 'case-back-background-color') {
      var colorString = newColor.toHEX().toString();
      $('.case-back-background-color, .case-back-container').css('backgroundColor', colorString);
      //change color of li text
      // $('.case-back-background-color').css('color', colorString);

  }
  else if(colorFor == 'case-back-color') {
      var colorString = newColor.toHEX().toString();
      // $('.case-back-color').css('backgroundColor', colorString);
      $('.case-back .b, .case-back-serial .l').css("fill", colorString);
      //font awsome icon
      $('.gistro').css('color', colorString);
  }
  else{
 // if none of the above are TRUE then do nothing.
  }
//--------------------------------------------------------------


});

///////////////////////////////////////////////////


});

});


// MY iDEA:
// if: 	picker btn position left + picker container width = or < body width
//    show container top left of the btn
// else: 	show container center (do as in css - center container)




//============================================================

//============================================================
// RANGE SLIDER FOR RESIZING

$('.resize-slider').each(function(index) {
    $(this).on("click", function(){
  var bodyWidth = $('body').width();
      popUpWidth = $('.menu-pop-up').outerWidth();

      sliderContainerWidth = $('.resize-slider-container').outerWidth();
      sliderContainerHalfWidth = -(sliderContainerWidth/2);
      btnPosition = $(this).offset(); // retrieve the current position of  clicked element  relative to the document -read jquery docs
      console.log(popUpWidth);

  if(btnPosition.left + sliderContainerWidth <=  bodyWidth) {
    //show container top left of the btn
    $('.resize-slider-container').css({"left" : btnPosition.left, "margin-left" : "20px" }); // add margin for li element padding
    TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:-300, opacity:1}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite
  }
  else {
    // simulate css - left 50% - margin 50% of elements width - so i can change manualy in css difrent width's of container
    // $('.color-container').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth }).show();
    $('.resize-slider-container').css({ 'left' : '50%', 'margin-left' : sliderContainerHalfWidth });
    TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:-300, opacity:1}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite

    // $('.color-container').addClass('color-container-center').toggle();
 }



// add remove event listener insted of always listen to document click
 function gistroFunction() {
   // If the click happened inside the the container, bail
   //if user cliks  li button or color picker container do nothing
   if (event.target.closest('.resize-slider-container, .resize-slider')) return;

   // Otherwise, run our code...
   console.log('outside');
   TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:90, opacity:1}, {bottom:-300, opacity:1, display:'none'})  //animate with TweenLite

   //remove document event listener
    document.removeEventListener('click', gistroFunction);
 }

 document.addEventListener('click', gistroFunction);



  });
 });


//===========================================================



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


// plus/ minus range slider input buttons
// code from: http://jsfiddle.net/kgLsky8s/2/
//read https://www.w3schools.com/jsref/jsref_parseint.asp
//read: https://www.w3schools.com/jsref/jsref_parsefloat.asp
//
$("#plus").click(function(){
      var newValuePlus = parseFloat($("#range").val()) * 10 + 1;
      if ( newValuePlus > 100 ) return;
      $("#range").val(newValuePlus/10);
      TweenLite.to(caseBack, 1,{scale: newValuePlus/10});
      sizeNum.innerText = newValuePlus/10 + ' x';
      console.log(newValuePlus/10)
  });
  $("#minus").click(function(){
      var newValueMinus = parseFloat($("#range").val()) - 0.1;
      if ( newValueMinus < 0.2 ) return;
      $("#range").val(newValueMinus);
      TweenLite.to(caseBack, 1,{scale: newValueMinus});
      sizeNum.innerText = newValueMinus + ' x';
      console.log(newValueMinus)
  });


range.addEventListener("input", function() {
  // css scale add new transform
  //caseBack.style.transform = "scale(" + this.value + ")";
  // i need to use greensock TweenLite becouse od draggable
  TweenLite.to(caseBack, 1,{scale: this.value});
  sizeNum.innerText = "x " + this.value;
  console.log(this.value)
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

        //just a test for new content. For example: thanks for using now please buy a tshirt :)
        // $('.controls-menu-container').hide();
    });

};


//mouse whell jquery plugin
// for menu list mouse whell scroling on desktop
// https://github.com/jquery/jquery-mousewheel
// https://codepen.io/CalvinMorett/pen/bYGdNv
$(document).ready(function() {
$('.controls-menu').mousewheel(function(e, delta) {
this.scrollLeft -= (delta * 50);
e.preventDefault();

//hide menu info this is just test
$('.menu-scroll-info').hide('slow');
// ===============================
});
});
