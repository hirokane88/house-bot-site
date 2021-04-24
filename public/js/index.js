$("body").addClass("bg");

$("select").addClass("placeholder");

$("select").click(function() {
  $(this).css("color", "black");
  $("option").css("color", "black");
});

$("option").click(function() {
  $(this).parentNode.css("color", "black");
});


$("input").click(function() {
  $(this).css("color", "black");
});
