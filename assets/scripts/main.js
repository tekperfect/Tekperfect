/*jshint esversion: 6 */
$(document).ready(() => {

  // materialize
  $(".sidenav").sidenav();
  $(".parallax").parallax();

  //


  var ctx = $("#myChart");
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Small Medium Sized Businesses", "NonProfits", "Startups"],
      datasets: [{
        label: "# of Votes",
        data: [10, 4, 8],
        backgroundColor: [
          "rgb(138, 169, 204)",
          "rgb(90, 98, 106)",
          "rgb(221, 207, 125)",
        ],
        borderColor: [
          "rgba(138, 169, 204, 1)",
          "rgba(90, 98, 106, 1)",
          "rgba(221, 207, 125, 1)",
        ],
        borderWidth: 1,
      }, ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }, ],
      },
    },
  });
});