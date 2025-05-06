document.getElementById("title").addEventListener("click", function () {
  document.getElementById("title").innerHTML = "Hello World!";
  document.getElementById("title").style.color = "blue";
  alert("Title has been updated");
});

document.gete

document.getElementById("today-date").innerHTML = new Date().toLocaleDateString(
  "en-GB",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);

// document
//   .getElementById("login-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting
//     const username = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     console.log("Username:", username);
//     console.log("Password:", password);
//   });

document.getElementById("get-weather").addEventListener("click", async function () {
    // Hide the button and show the spinner
    const button = document.getElementById("get-weather");
    const spinner = document.querySelector(".spinner-border");

    button.style.display = "none";
    spinner.style.display = "inline-block";

    try {
      const raw_data = await fetch('https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast');
      const data = await raw_data.json();
      console.log(data);

      let forecast = "";
      let tempLow = "";
      let tempHigh = "";

      if (data) {
        forecast = data.data.records[0].general.forecast.text;
        tempLow = data.data.records[0].general.temperature.low;
        tempHigh = data.data.records[0].general.temperature.high;
      }

      console.log(forecast);
      document.getElementById("weather-forecast").innerHTML = `Today is a ${forecast}`;
      document.getElementById("weather-temp").innerHTML = `Low:${tempLow}°C, High:${tempHigh}°C`;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Hide the spinner and show the button again
      spinner.style.display = "none";
      button.style.display = "inline-block";
    }
  });
