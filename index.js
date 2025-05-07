document.getElementById("title").addEventListener("click", function () {
  document.getElementById("title").innerHTML = "Hello World!";
  document.getElementById("title").style.color = "blue";
  alert("Title has been updated");
});


document.getElementById("today-date").innerHTML = new Date().toLocaleDateString(
  "en-GB",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);

const sayHello = () => {
  alert("HELLO");
};


document
  .getElementById("get-weather")
  .addEventListener("click", async function () {
    // Hide the button and show the spinner
    const button = document.getElementById("get-weather");
    const spinner = document.querySelector(".spinner-border");

    button.style.display = "none";
    spinner.style.display = "inline-block";

    try {
      const raw_data = await fetch(
        "https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast"
      );
      const data = await raw_data.json();

      let forecast = "";
      let tempLow = "";
      let tempHigh = "";

      if (data) {
        forecast = data.data.records[0].general.forecast.text;
        tempLow = data.data.records[0].general.temperature.low;
        tempHigh = data.data.records[0].general.temperature.high;
      }

      console.log(forecast);
      document.getElementById(
        "weather-forecast"
      ).innerHTML = `Weather today: ${forecast}`;
      document.getElementById(
        "weather-temp"
      ).innerHTML = `Low:${tempLow}°C, High:${tempHigh}°C`;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Hide the spinner and show the button again
      spinner.style.display = "none";
      button.style.display = "inline-block";
    }
  });

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits
  const seconds = date.getSeconds().toString().padStart(2, "0"); // Ensure two digits
  const ampm = hours >= 12 ? "pm" : "am"; // Determine AM or PM

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  document.getElementById(
    "time-display"
  ).innerHTML = `${hours}:${minutes}${ampm}`;
  return;
};

const getEmojies = () => {
  const emojies = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "😇",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
  ];

  let emojiContainer = document.getElementById("emoji-container");
  if (!emojiContainer) {
    emojiContainer = document.createElement("div");
    emojiContainer.id = "emoji-container";
    emojiContainer.style.position = "absolute";
    emojiContainer.style.top = "0";
    emojiContainer.style.left = "0";
    emojiContainer.style.width = "100%";
    emojiContainer.style.height = "100%";
    emojiContainer.style.pointerEvents = "none";
    document.body.appendChild(emojiContainer);
  }

  // Clear existing emojis in the container
  emojiContainer.innerHTML = "";

  for (let i = 0; i < emojies.length; i++) {
    const emojiElement = document.createElement("span");
    emojiElement.innerHTML = emojies[i];
    emojiElement.classList.add("flying-emoji");

    // Randomize initial position within the body
    emojiElement.style.left = `${Math.random() * window.innerWidth}px`;
    emojiElement.style.top = `${Math.random() * window.innerHeight}px`;

    emojiContainer.appendChild(emojiElement);
  }
};
