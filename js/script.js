// Hide and show the whole what we do part

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

document.addEventListener('DOMContentLoaded', function () {

  //By default the submit button is disabled
  document.querySelector('#submit').disabled = true;

  document.querySelector('#info_name').onkeyup = () => {
    document.querySelector('#submit').disabled = false;
  }
  document.querySelector('form').onsubmit = function () {
    const name = document.querySelector('#info_name').value;
    alert(`Hello, ${name} we have received your message. Thank you for reaching out to us.`)
  };
});
