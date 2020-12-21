$("#design  ").click(function(){
  $(this).children(".hide").slideToggle(1300);
  $(this).children(".show").slideToggle(1400);
});
$(".card-1").hover(function(){
  $(this).children(".card-1").fadeToggle(500);
});
