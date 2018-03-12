'use strict';
$(document).ready(function(){
  $('.side-menu-trigger').click(function(){
    $('.side-menu').stop().slideToggle(500);
  });
});

