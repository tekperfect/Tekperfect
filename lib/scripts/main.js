$(document).ready(() => {
  // button trigger
  ScrollReveal().reveal("main");
  // PROCESS
  $("#processBtn").click(function () {
    $("#mainContent").addClass("hide");
    $("#processCard").removeClass("hide");
  });

  // TRAINING
  $("#trainingBtn").click(function () {
    $("#mainContent").addClass("hide");
    $("#dataCard").removeClass("hide");
  });
});
