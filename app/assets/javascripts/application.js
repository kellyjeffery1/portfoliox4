//= require rails-ujs
//= require_tree .
// $(document).ready(function() {
// Wrap every letter in a span
// // main heading
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: 70
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '60%'
  })
  .setPin('#intro')
  .addTo(controller);

  // pin again
  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '#project01',
    triggerHook: 0.4
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  // loop through each .project element
  $('.project').each(function(){

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
    .setClassToggle(this, 'fade-in') // add class to project01
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'black',
    //   colorStart: '#75C695',
    //   colorEnd: 'pink'
    // }) // this requires a plugin
    .addTo(controller);

  });

});
// fonts

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

// $(document).ready(function(){
//   $(".").on('click', function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//       // Store hash
//       var hash = this.hash;
//       // Using jQuery's animate() method to add smooth page scroll
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1000, function(){
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     }
//   });
// });

$(document).ready(function() {
$(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".up").offset().top
     }, 1500);
 });
});

$(document).ready(function() {
$(".up").click(function() {
     $('html, body').animate({
         scrollTop: $(".down").offset().top
     }, 1000);
 });
});
// -------------------------------------------
$(document).ready(function() {
$(".down2").click(function() {
     $('html, body').animate({
         scrollTop: $(".up2").offset().top
     }, 1500);
 });
});

$(document).ready(function() {
$(".up2").click(function() {
     $('html, body').animate({
         scrollTop: $(".down2").offset().top
     }, 1000);
 });
});

// $('.scrollTo').click(function() {
//   var getElem = $(this).attr('section1');
//   var targetDistance = 20;
//   if ($(getElem).length) {
//     var getOffset = $(getElem).offset().top;
//     $('html,body').animate({
//       scrollTop: getOffset - targetDistance
//     }, 500);
//   }
//   return false;
// });
