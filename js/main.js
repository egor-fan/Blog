$(document).ready(function(){
  $('.nav_burger').click(function(event){
    $('.menu_burger').toggleClass('active');
    $('body,html').toggleClass('lock');
    $('.right_container').toggleClass('bg');
  })
})

$(document).ready(function(){
  $('.nav_burger').click(function(event) {
    $('.menu__burger').removeClass('active');
  })
})


