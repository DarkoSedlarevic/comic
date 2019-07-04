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
    TweenLite.fromTo ($('.color-container2') , 0.3, {bottom:80, opacity:1}, {bottom:0, opacity:0, display:'none'})  //animate with TweenLite
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
    if (event.target.closest('.color-container2, .position-test')) return;

    // Otherwise, run our code...
    // console.log('outside');
    TweenLite.fromTo ($('.color-container2') , 0.3, {bottom:90, opacity:1}, {bottom:-300, opacity:1, display:'none'})  //animate with TweenLite


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
    $('.color-container2').css({"left" : btnPosition.left, "margin-left" : "10px" }); // add margin for li element padding
    TweenLite.fromTo ($('.color-container2') , 0.3, {bottom:-300, opacity:0}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite
  }
  else {
    // simulate css - left 50% - margin 50% of elements width - so i can change manualy in css difrent width's of container
    // $('.color-container').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth }).show();
    $('.color-container2').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth });
    TweenLite.fromTo ($('.color-container2') , 0.3, {bottom:-300, opacity:0}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite

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
      var colorString = newColor.toRGBA().toString();
      console.log(colorString)
      $('.screensaver-container').css('backgroundColor', colorString);

  }
  else if(colorFor == 'case-back-background-color') {
      var colorString = newColor.toRGBA().toString();
      $('.case-back-background-color, .case-back-container').css('backgroundColor', colorString);
      //change color of li text
      // $('.case-back-background-color').css('color', colorString);

  }
  else if(colorFor == 'case-back-color') {
      var colorString = newColor.toRGBA().toString();
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
// if: 	pop-up btn(class) position left + pop-up-container(class) width = or < body width
//    show pop-up-container top left of the btn
// else: 	show pop-up-container center (do as in css - center container)
//============================================================
$('[data-function=menu-poper]').each(function(index) {
    $(this).on('click', function(){

        var element = this.getAttribute('data-target-element'); //get pop up element
            poperElementWidth = $(element).outerWidth(); // //get pop up element width with margins and padding
            poperElementHalfWidth = poperElementWidth / 2;
            bodyWidth = $('body').width();
            poperBtnPosition = $(this).offset(); // retrieve the current position of  clicked element (li) relative to the document

            marginLeft = '20px';
            bottomFrom = '-300';
            bottomTo = '90';

            animationTime = '.5';
            animationEasing = 'Bounce.easeOut';
            tweenUp = TweenLite.fromTo($(element), animationTime, {bottom:bottomFrom, opacity:1}, {bottom:bottomTo, opacity:1, display:'block', ease:animationEasing});


        // i can use .getComputedStyle or read :
        // https://stackoverflow.com/questions/15924751/check-using-jquery-if-an-element-is-displaynone-or-block-on-click

        //I CaN USE THIS ALSO: if($(element).is(':visible')) {
        //if element is visible hide with animation
        if ($(element).css('display') !== 'none') {
            TweenLite.fromTo($(element), animationTime, {bottom:bottomTo, opacity:1}, {bottom:bottomFrom, opacity:1, display:'none'})  //animate reverse with TweenLite
        }

        else {
          //if  button position left plus popup width are smaller then body width and button left is not negative value
           if (poperBtnPosition.left + poperElementWidth <= bodyWidth && poperBtnPosition.left > 0) {
              // show pop up container top left of the poper btn (li)
              $(element).css({'left' : poperBtnPosition.left, 'margin-left' : marginLeft }); // add margin for li element padding
              tweenUp  //animate with TweenLite
              addClosePoperListener();
            }
            else {
              // simulate css - left 50% - margin 50% of elements width - so i can change manualy in css difrent width's of pop up container
              $(element).css({ 'left' : '50%', 'margin-left' : -poperElementHalfWidth });
              tweenUp //animate with TweenLite
              addClosePoperListener();
            }
             function closePoperFunction() {
                // If the click happened inside container or menu li link, bail
                //if user clicks  li button or color picker container do nothing
                if (event.target.closest(element)) return;


                // if (!event.target.closest(element)) {

                // Otherwise, run our code...
                TweenLite.fromTo($(element), animationTime, {bottom:bottomTo, opacity:1}, {bottom:bottomFrom, opacity:1, display:'none'})  //animate reverse with TweenLite
               //remove document event listener
              //document.removeEventListener('click', closePoperFunction);
                removeClosePoperListener();
                //remove document event listener
                // document.removeEventListener('click', closePoperFunction, false);
                // }
             }
             function addClosePoperListener () {
                 document.addEventListener('click', closePoperFunction, true);
                //  document.addEventListener('click', function(){closePoperFunction()});
             }
             function removeClosePoperListener () {
                  //remove document event listener
                  document.removeEventListener('click', closePoperFunction, true);
                  // document.removeEventListener('click', function(){closePoperFunction()});
              }
        }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// SREDITI OVAJ DEO NA KRAJU OBAVEZNOOOOOOO  !!!!!!!!!!!!!!!!!!!
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
       // add remove event listener insted of always listen to document click

      //  document.addEventListener('click', function (event) {
       //
      //      // If the click happened inside the the container, bail
      //      //if user cliks  li button or color picker container do nothing
      //      if (event.target.closest(element)) return;
       //
      //      // Otherwise, run our code...
      //      TweenLite.fromTo($(element), animationTime, {bottom:bottomTo, opacity:1}, {bottom:bottomFrom, opacity:1, display:'none'})  //animate reverse with TweenLite
       //
      //  }, true);


      //  function closePoperFunction() {
      //     // If the click happened inside container or menu li link, bail
      //     //if user clicks  li button or color picker container do nothing
      //     if (event.target.closest(element)) return;
       //
       //
      //     // if (!event.target.closest(element)) {
       //
      //     // Otherwise, run our code...
      //     TweenLite.fromTo($(element), animationTime, {bottom:bottomTo, opacity:1}, {bottom:bottomFrom, opacity:1, display:'none'})  //animate reverse with TweenLite
      //    //remove document event listener
      //   //document.removeEventListener('click', closePoperFunction);
      //     removeClosePoperListener();
      //     //remove document event listener
      //     // document.removeEventListener('click', closePoperFunction, false);
      //     // }
      //  }
       //
       //
      //  function addClosePoperListener () {
      //     //  document.addEventListener('click', closePoperFunction, false);
      //      document.addEventListener('click', function(){closePoperFunction()});
      //  }
       //
      //  function removeClosePoperListener () {
      //       //remove document event listener
      //       // document.removeEventListener('click', closePoperFunction, false);
      //       document.removeEventListener('click', function(){closePoperFunction()});
      //   }



    });
});
//============================================================
// RANGE SLIDER FOR RESIZING
//
// $('.resize-sliders').each(function(index) {
//     $(this).on("click", function(){
//       var bodyWidth = $('body').width();
//           popUpWidth = $('.menu-pop-up').outerWidth();
//
//           sliderContainerWidth = $('.resize-slider-container').outerWidth();
//           sliderContainerHalfWidth = -(sliderContainerWidth/2);
//           btnPosition = $(this).offset(); // retrieve the current position of  clicked element  relative to the document -read jquery docs
//       console.log(popUpWidth);
//
//   if(btnPosition.left + sliderContainerWidth <=  bodyWidth) {
//     //show container top left of the btn
//     $('.resize-slider-container').css({"left" : btnPosition.left, "margin-left" : "20px" }); // add margin for li element padding
//     TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:-300, opacity:1}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite
//   }
//   else {
//     // simulate css - left 50% - margin 50% of elements width - so i can change manualy in css difrent width's of container
//     // $('.color-container').css({ 'left' : '50%', 'margin-left' : colorPickerHalfWidth }).show();
//     $('.resize-slider-container').css({ 'left' : '50%', 'margin-left' : sliderContainerHalfWidth });
//     TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:-300, opacity:1}, {bottom:90, opacity:1, display:'block'})  //animate with TweenLite
//
//     // $('.color-container').addClass('color-container-center').toggle();
//  }



// // add remove event listener insted of always listen to document click
//  function gistroFunction() {
//    // If the click happened inside the the container, bail
//    //if user cliks  li button or color picker container do nothing
//    if (event.target.closest('.resize-slider-container, .resize-sliders')) return;
//
//    // Otherwise, run our code...
//    console.log('outside');
//    TweenLite.fromTo ($('.resize-slider-container') , 0.3, {bottom:90, opacity:1}, {bottom:-300, opacity:1, display:'none'})  //animate with TweenLite
//
//    //remove document event listener
//     document.removeEventListener('click', gistroFunction);
//  }
//
//  document.addEventListener('click', gistroFunction);
//
//
//
//   });
//  });


//===========================================================



//draggable case back - green sock draggable
// JUST ADD Class .draggable-element to the element you want to be draggable
Draggable.create('.draggable-element',{
//  onDrag: function(){
//     zIndexBoost:false
// 	console.log(this.target._gsTransform);
// }
zIndexBoost:false

});

//===========================================================
// do all css transforms (scale rotate translate...) with Green Sock Tween Lite
// becouse it "adds and removes transforms" and do not make new inline css style from beggining. So I do not need to .split inline css transform  and query string

//*** IT'S NOT CENTERING IT JUST RESET TO START POSITION IF ELEMENT IS NOT CENTER BY DEFAULT!!!!!!!
// STO ZNACI DA MORAM DA IMAM RESET TRANSFORM I CENTER FUNKCIJE!!!!!!
// CENTER FUnkcija moze najverovatnije kao i pop-up's body and element  width and height plus translate math!
//===========================================================
// reset translate function:
// can be used when in need of resetng translate of element - its translate reset not centering!
// Usage:
// 1. add class "reset-translate" to the html element - to fire/triger function on element click
// 1. OR add just data-atribute so i do not have extra class - data-function="reset-translate"
// 2. add data-reset-axis atribute to html element - data atribute values: both, horizonal or vertical
// 3. add data-target-element atribute to html element - data atribut value is #id.of.targeted.element
// set animation time and easing in js vars or i can put it in data atribute latter so i can control it from html
$('[data-function=reset-translate]').each(function(index) {
    $(this).on('click', function(){

        var resetAxis = this.getAttribute('data-reset-axis'); //get axis to reset
            element = this.getAttribute('data-target-element'); //get element that need to be reset
            animationTime = '.5';
            animationEasing = 'Bounce.easeOut';

        switch (resetAxis) {
            // center case back -  remove/reset translate x,y or both added from draggable or something else
            case 'both':
                TweenLite.to($(element), animationTime, {x:0, y:0, z:0, ease:animationEasing});
                break;
            case 'horizontal':
                TweenLite.to($(element), animationTime, {x:0, ease:animationEasing});
                break;
            case 'vertical':
                TweenLite.to($(element), animationTime, {y:0, ease:animationEasing});
        }
    });
});
// //OLD CENTER DIV FUNCTION
// //center div function
// $('[data-function=center-element]').each(function(index) {
//
//     //The .offset() method allows us to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document. Contrast this with .position(), which retrieves the current position relative to the offset parent.
//
//     // put originl position to html data atributes
//     // set data atribute to each for original target element offset, so I can read it affter resize and do the math
//     // bocuse in my shushumushu math I need originak position so I can reset translate  position to document/css one and i can't get it if beffore click there was window resize for example: full screen
//     // element moves in relation to original element posotion(css) with translate not in relation to document left or top offset
//     this.setAttribute('data-target-original-position-top', $(this.getAttribute('data-target')).offset().top)
//     this.setAttribute('data-target-original-position-left', $(this.getAttribute('data-target')).offset().left)
//
//     var originalBodyWidth = $('body').width();
//         originalBodyHeight = $('body').height();
//
//     $(this).on('click', function(){
//
//         var element = this.getAttribute('data-target');
//             axis = this.getAttribute('data-axis'); //get data atribute of clicked button
//             //maybe to set this outside to be for this and reset element position the same
//             animationTime = '.5';
//             animationEasing = 'Bounce.easeOut';
//
//             newBodyWidth = $('body').width();
//             newBodyHeight = $('body').height();
//             elementWidth = $(element).width();
//             elementHeight = $(element).height();
//
//         switch (axis) {
//             // center case back -  remove/reset translate x,y or both added from draggable or something else
//             case 'both':
//                 var elementOriginalPositionLeft = this.getAttribute('data-target-original-position-left');
//                     elementOriginalPositionTop = this.getAttribute('data-target-original-position-top');
//                     horizontalPosition = parseInt(newBodyWidth - (parseInt(elementOriginalPositionLeft) + parseInt((newBodyWidth - originalBodyWidth) / 2))) - parseInt(newBodyWidth/2) - parseInt(elementWidth/2);
//                     verticalPosition = parseInt(newBodyHeight - (parseInt(elementOriginalPositionTop) + parseInt((newBodyHeight - originalBodyHeight) / 2))) - parseInt(newBodyHeight/2) - parseInt(elementHeight/2);
//                 TweenLite.to($(element), animationTime, {x:horizontalPosition, y:verticalPosition, z:0, ease:animationEasing});
//                 break;
//             case 'horizontal':
//                 var elementOriginalPositionLeft = this.getAttribute('data-target-original-position-left');
//                     horizontalPosition = parseInt(newBodyWidth - (parseInt(elementOriginalPositionLeft) + parseInt((newBodyWidth - originalBodyWidth) / 2))) - parseInt(newBodyWidth/2) - parseInt(elementWidth/2);
//                 TweenLite.to($(element), animationTime, {x:horizontalPosition, ease:animationEasing});
//                 break;
//             case 'vertical':
//                 var elementOriginalPositionTop = this.getAttribute('data-target-original-position-top');
//                     verticalPosition = parseInt(newBodyHeight - (parseInt(elementOriginalPositionTop) + parseInt((newBodyHeight - originalBodyHeight) / 2))) - parseInt(newBodyHeight/2) - parseInt(elementHeight/2);
//                 TweenLite.to($(element), animationTime, {y:verticalPosition, ease:animationEasing});
//         }
//     });
// });

//NEW CENTER DIV FUNCTION
//use document insted of body... document.height returns od full document not just viewport as body.height... Returns height of browser viewport: $( window ).height(); Returns height of HTML document: $( document ).height();
// element moves from original element position(css) in relation to document left or top offset -  not with curent position with GSAP translation
//it center element to the full html docment center not to browser viewport center so if body is for example 2x of viewport center "line" should be in bottom off viewport/screen
//only problem is if body overflow-x-and-y are not hidden and one element goes beyond curent document width/height it will  center everything to that new position untill overflowed element is not centered also...
// ** I need to use native getBoundingClientRect() for element height and width becoyuse of scaling instead of jquery .width & .height. Becouse i have transform scale and jquery .height .width method gets only original element size from css not scaled one! read more:  https://stackoverflow.com/questions/22879650/get-width-and-height-of-image-after-scaling
// get GSAP transform data with _gsTransform object: https://www.youtube.com/watch?v=8ei3NoFY9Io

// ******* NEED TO USE parseInt, parsefloat OR SOMETHING ELSE FOR POSITION MATH, BECOUSE OF DECIMAL POINTS AND ROUNDING NUMBERS. FOR NOW ITS NOT CORECT FOR COUPLE OF PIXELS
$('[data-function=center-element]').each(function(index) {
    $(this).on('click', function(){

        var element = this.getAttribute('data-target-element'); //get element that need to be centered
            centerAxis = this.getAttribute('data-center-axis'); //get axis  to move element
            //maybe to set this outside to be for this and reset element position the same
            animationTime = '.5';
            animationEasing = 'Bounce.easeOut';

        switch (centerAxis) {
            case 'both':
                var elementXtranslate = $(element)[0]._gsTransform.x; //get elements GSAP translate x value
                    elementYtranslate = $(element)[0]._gsTransform.y; //get elements GSAP translate y value
                    elementPositionLeft = $(element).offset().left; //get elements curent position from left
                    elementPositionTop = $(element).offset().top; //get elements curent position from top
                    documentWidth = $(document).width();
                    documentHeight = $(document).height();
                    //use native JS getBoundingClientRect() for element height and width becouse of transform scaling
                    elementWidth = $(element)[0].getBoundingClientRect().width;
                    elementHeight = $(element)[0].getBoundingClientRect().height;
                    horizontalPosition = documentWidth - (elementPositionLeft - elementXtranslate) - (documentWidth/2) - (elementWidth/2);
                    verticalPosition = documentHeight - (elementPositionTop - elementYtranslate) - (documentHeight/2) - (elementHeight/2);
                TweenLite.to($(element), animationTime, {x:horizontalPosition, y:verticalPosition, z:0, ease:animationEasing});
                break;
            case 'horizontal':
                var elementXtranslate = $(element)[0]._gsTransform.x; //get elements GSAP translate x value
                    elementPositionLeft = $(element).offset().left; //get elements curent position from left
                    documentWidth = $(document).width();
                    //use native JS getBoundingClientRect() for element height and width becouse of transform scaling
                    elementWidth = $(element)[0].getBoundingClientRect().width;
                    horizontalPosition = documentWidth - (elementPositionLeft - elementXtranslate) - (documentWidth/2) - (elementWidth/2);
                TweenLite.to($(element), animationTime, {x:horizontalPosition, ease:animationEasing});
                break;
            case 'vertical':
                var elementYtranslate = $(element)[0]._gsTransform.y; //get elements GSAP translate y value
                    elementPositionTop = $(element).offset().top; //get elements curent position from top
                    documentHeight = $(document).height();
                    //use native JS getBoundingClientRect() for element height and width becouse of transform scaling
                    elementHeight = $(element)[0].getBoundingClientRect().height;
                    verticalPosition = documentHeight - (elementPositionTop - elementYtranslate) - (documentHeight/2) - (elementHeight/2);
                TweenLite.to($(element), animationTime, {y:verticalPosition, ease:animationEasing});
        }
    });
});

// // TEST ROTATE - NEED TO ADD SLIDER CONTROL FROM -180deg TO 180deg
// function rotateCaseBack() {
//   var caseBack = document.querySelector(".case-back-container");
//   // with tween lite for animation
//   //I need to use greensock TweenLite jer definitivno opet vraca kao i za scale
//   // check for transform origin and added on the final script:
//   TweenLite.to(caseBack, .5, {rotation:180, ease:Bounce.easeOut});
// };





//SLIDERS ROTATE AND SCALE FUNCTION
$('[data-function=slider]').each(function(index) {
    //sliders
    this.addEventListener('input', function() {

        var sliderFunction = this.getAttribute('data-slider-function'); //get slider function (rotate/scale)
            element = this.getAttribute('data-target-element'); //get element that slider needs to "control"
            animationTime = '.5';
            animationEasing = 'Bounce.easeOut';

            // slider = this.querySelector('.slider-something');
            slider = this.querySelector('input[type="range"]');
            // sliderMinValue = $(slider).attr('min');
            // sliderMaxValue = $(slider).attr('max');
            // sliderStepValue = $(slider).attr('step');
            // sliderValue = $(slider).attr('value');
            sliderValue = this.querySelector('.slider-value');
            // sliderDefaultValue = $(slider).attr('value');

            // sliderPlusButton = this.querySelector('.slider-plus-btn');
            // sliderMinusButton = this.querySelector('.slider-minus-btn');

        switch (sliderFunction) {

            case 'rotate':
                TweenLite.to($(element), animationTime, {rotation:slider.value, ease:animationEasing});
                sliderValue.innerHTML = slider.value + '&#176; deg';
                break;

            case 'scale':
                // i need to use greensock TweenLite becouse od draggable
                TweenLite.to($(element), animationTime, {scale: slider.value, ease:animationEasing});
                sliderValue.innerHTML = slider.value + ' x';
        }
    });

    //plus and minus buttons
    this.addEventListener('click', function (event) {
        var sliderFunction = this.getAttribute('data-slider-function'); //get slider function (rotate/scale)
            element = this.getAttribute('data-target-element'); //get element that slider needs to "control"
            animationTime = '.5';
            animationEasing = 'Bounce.easeOut';

            // slider = this.querySelector('.slider-something');
            slider = this.querySelector('input[type="range"]');

            sliderMinValue = $(slider).attr('min');
            sliderMaxValue = $(slider).attr('max');
            sliderStepValue = $(slider).attr('step');
            // sliderValue = $(slider).attr('value');
            sliderValue = this.querySelector('.slider-value');
            sliderDefaultValue = $(slider).attr('value');

        //if user clicks slider plus button
        if (event.target.closest('.slider-plus-btn')) {

            var newValuePlus = parseFloat($(slider).val()) * 100 + parseFloat(sliderStepValue) * 100;
            console.log(newValuePlus/100)
            //if new value is greater then slider Max Value do nothing/ return
            if (newValuePlus/100 > sliderMaxValue) return;
            //else ad new value to slider value, animate and change slider value text div
            $(slider).val(newValuePlus/100);

            // samo ova dve menjam u zavisnoti od slucaja switch statment
            switch (sliderFunction) {

                case 'rotate':
                    TweenLite.to($(element), animationTime, {rotation:slider.value, ease:animationEasing});
                    sliderValue.innerHTML = slider.value + '&#176; deg';
                    break;

                    case 'scale':
                    // i need to use greensock TweenLite becouse od draggable
                    TweenLite.to($(element), animationTime, {scale: slider.value,    ease:animationEasing});
                    sliderValue.innerHTML = slider.value + ' x';
                  }
        }
        //if user clicks slider minus button
        if (event.target.closest('.slider-minus-btn')) {

            var newValueMinus = parseFloat($(slider).val()) * 100 - parseFloat(sliderStepValue) * 100;
            console.log(newValueMinus/100)
            //if new value is smaller then slider Min Value do nothing/ return
            if (newValueMinus/100 < sliderMinValue) return;
            //else ad new value to slider value, animate and change slider value text div
            $(slider).val(newValueMinus/100);
            // samo ova dve menjam u zavisnoti od slucaja switch statment
            switch (sliderFunction) {

                case 'rotate':
                    TweenLite.to($(element), animationTime, {rotation:slider.value, ease:animationEasing});
                    sliderValue.innerHTML = slider.value + '&#176; deg';
                    break;

                    case 'scale':
                    // i need to use greensock TweenLite becouse od draggable
                    TweenLite.to($(element), animationTime, {scale: slider.value,    ease:animationEasing});
                    sliderValue.innerHTML = slider.value + ' x';
                  }
        }

    }, false);

});
//scaling caseback with native html5input range
// code from: https://codepen.io/chriscoyier/pen/rLgPRY
//NADJI BOLJI CODE NA KRAJU !!!!!!

// var range = document.querySelector("#range");
// var caseBack = document.querySelector(".case-back-container");
// var sliderValue = document.querySelector(".slider-value");

// plus/ minus range slider input buttons
// code from: http://jsfiddle.net/kgLsky8s/2/
//read https://www.w3schools.com/jsref/jsref_parseint.asp
//read: https://www.w3schools.com/jsref/jsref_parsefloat.asp
//

// $("#plus").click(function(){
//       var newValuePlus = parseFloat($("#range").val()) * 10 + 1;
//       if ( newValuePlus > 100 ) return;
//       $("#range").val(newValuePlus/10);
//       TweenLite.to(caseBack, 1,{scale: newValuePlus/10});
//       sliderValue.innerText = newValuePlus/10 + ' x';
//       console.log(newValuePlus/10)
//   });
//   $("#minus").click(function(){
//       var newValueMinus = parseFloat($("#range").val()) - 0.1;
//       if ( newValueMinus < 0.2 ) return;
//       $("#range").val(newValueMinus);
//       TweenLite.to(caseBack, 1,{scale: newValueMinus});
//       sliderValue.innerText = newValueMinus + ' x';
//       console.log(newValueMinus)
//   });


// range.addEventListener("input", function() {
//   // css scale add new transform
//   //caseBack.style.transform = "scale(" + this.value + ")";
//   // i need to use greensock TweenLite becouse od draggable
//   TweenLite.to(caseBack, 1,{scale: this.value});
//   sliderValue.innerText = "x " + this.value;
//   console.log(this.value)
// });


// color picker
//my idea: for each set data atributes and then init with js?
$('[data-function=color-pickr]').each(function(index) {

    var pickrElement = this;
        defaultColor = this.getAttribute('data-default-color'); //get default color data atribute

    const pickr = new Pickr({
        el: pickrElement,
        //white
        default: defaultColor,
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

    })
    .on('change', (newColor) => {
        if (newColor === null) {
            return;
        }
        else {
            // get color on pickr change and convert to string
            var colorString = newColor.toRGBA().toString();
            //check to see does atribute for css background color exist
            if (pickrElement.hasAttribute('data-background-color-target')) {
                //get string of classes and id's for background color change
                var backgroundColorTarget = this.getAttribute('data-background-color-target');
                $(backgroundColorTarget).css('backgroundColor', colorString);
            }
            //check to see does atribute for css fill color exist - svg
            if (pickrElement.hasAttribute('data-fill-color-target')) {
                // get string of classes and id's for fill color change - svg
                var fillColorTarget = this.getAttribute('data-fill-color-target');
                $(fillColorTarget).css('fill', colorString);
            }
            //check to see does atribute for css color exist
            if (pickrElement.hasAttribute('data-color-target')) {
                // get string of classes and id's for color change
                var colorTarget = this.getAttribute('data-color-target');
                $(colorTarget).css('color', colorString);
            }
        }
    });
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





// TESTING BACKGROUND IMAGE UPLOAD AND MANIPULATIONS
// see: https://codepen.io/mobifreaks/pen/LIbca
// find better code
function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#background-image').attr('src', e.target.result).toggleClass('image-toggle-index');
           };

           reader.readAsDataURL(input.files[0]);
       }
}
// toogle z index of image
function backgroundImageZindex() {
  $('#background-image').toggleClass('image-toggle-index');
}
