//= require rails-ujs
//= require_tree .
// $(document).ready(function() {
// Wrap every letter in a span
// // main heading
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

//   // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
  // main heading

  // all h2
  // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml12 .letter',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
//   }).add({
//     targets: '.ml12 .letter',
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i
//   });

// });

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml16');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml16 .letter',
//     translateY: [-100,0],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 30 * i
//   }).add({
//     targets: '.ml16',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// scroll



$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '40%'
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

//   // ----------------------------

// var pinIntroScene3 = new ScrollMagic.Scene({
//     triggerElement: '#project02',
//     triggerHook: 0.4
//   })
//   .setPin('#intro', {pushFollowers: false})
//   .addTo(controller);
// //----------------------------------------




  // loop through each .project element
  $('.project').each(function(){

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
    .setClassToggle(this, 'fade-in') // add class to project01
    .addIndicators({
      name: 'fade scene',
      colorTrigger: 'black',
      colorStart: '#75C695',
      colorEnd: 'pink'
    }) // this requires a plugin
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


















