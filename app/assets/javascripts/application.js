//= require rails-ujs
//= require_tree .
$(document).ready(function(){
      $(".action").click(function(){

        $('.cont').animate({"width":"0%"},600,'ease OutCirc');
        $('.cont').animate({
          "opacity":"1"

        },900);

        $('.pen-label').fadeIn(1000);
        $('.rRect').animate({
          "width" : "25%",
          "box-shadow" : "0 0 20px gray"

        }, 1000, 'easeInOutCirc');
        $('.pen-label').animate({
          "color" : "white"
        },1000);

        });

      starter();
      function starter(){


        $('.cont').animate({
          "opacity":"1"

        },900);

        $('.pen-label').fadeIn(1000);
        $('.rRect').animate({
          "width" : "25%",
          "box-shadow" : "0 0 20px gray"

        }, 1000, 'easeInOutCirc');
        $('.pen-label').animate({
          "color" : "white"
        },1000);

      }

      $(".rev").click(function(){

        $('.pen-label').fadeIn(1000);
        $('.rRect').animate({
          "width" : "25%",
          "box-shadow" : "0"

        }, 1000, 'easeInOutCirc');
        $('.pen-label').animate({
          "color" : "gray"
        },1000);

      });

      $('.trigger-an').click(function(){
        $(".rRect").animate({
          "-webkit-transform" : "skew(200deg)"
        },500);


        $(".rRec").animate({
          "transform" : "skew(200deg)"

        },500);

        $('.rRect').css({
          "transform": "skew(200deg)"

        });

      });
    });
