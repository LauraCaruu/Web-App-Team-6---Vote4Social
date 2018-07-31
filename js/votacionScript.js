$(document).ready(function(){
  var checkmark = "<span class='checkmark'>&#x2713;</span>";

  $(".answer").click(function() {
    $(this).siblings(".answer").removeClass("active").children("span").remove();
    $(this).addClass("active").append(checkmark);
  });

  $("button").click(function() {
    if($(".active").length) {
    /*  if($(".active").index() === 1)*/ {
        alert("Siguiente Pregunta (El Supuesto es que va a la siguiente pregunta)");
      } /*else {
        alert("Wrong answer!");
      }*/
    } else {
      alert("Por favor selecionar una respuesta");
    }
  });
});
