document.addEventListener("DOMContentLoaded", () => {
  let data = {
    alertMessage: "Start 2020 with a fresh look at your system. Contact us for a IT audit and overview for your organization!",
    links: {
      email: "support@tekperfect.com",
      twitter: "https://twitter.com/tekperfect",
    }
  };

  const alert = true;
  const createBanner = (message) => {
    let bannerDiv = document.createElement("div");
    const textMessage = document.createTextNode(message);
    bannerDiv.appendChild(textMessage);
  }
  if (alert) {
    console.log(alert);
    createBanner(data.alertMessage)
  }



  // detect screen resize

  const returnWindowSize = () => {
    let currentScreenWidth = window.innerHeight;
    console.log(currentScreenWidth)
  }

  window.onresize = returnWindowSize;
  let currentScreenWidth = window.screen.width;
  console.log(currentScreenWidth)
  document.getElementById("alertMessage").innerHTML = data.alertMessage;
});