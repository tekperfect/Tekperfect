$(document).ready(() => {
  console.log("hello");
  // materialize
  $(".sidenav").sidenav();
  $(".parallax").parallax();
  var ctx = $("#myChart");
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Small Medium Sized Businesses", "NonProfits", "Startups"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 4, 8],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
