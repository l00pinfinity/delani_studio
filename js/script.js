// $(document).ready(function(){
//   $(".show").click(function(){
//     $(".hide").show();
//   });
// });
$('.design').click(function () {
 $(this).children('.hide').slideToggle(1300);
 $(this).children('.show').slidetoggle(1400);
});
$(".card").hover(function () {
 $(this).children(".card-1").fadeToggle(500);
});
