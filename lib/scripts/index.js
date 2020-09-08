document.addEventListener("DOMContentLoaded", () => {
  let data = {
    alertMessage:
      "Start 2020 with a fresh look at your system. Contact us for a IT audit and overview for your organization!",
    links: {
      email: "support@tekperfect.com",
      twitter: "https://twitter.com/tekperfect",
    },
  };
  let alertMessage = document.querySelector("#alertMessage");

  document.getElementById("alertMessage").innerHTML = data.alertMessage;
});
