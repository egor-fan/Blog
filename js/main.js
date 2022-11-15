$(document).ready(function(){
  $('.nav_burger').click(function(event){
    $('.nav_burger, .menu_burger').toggleClass('active');
    $('body').toggleClass('lock')
    
  })
})

