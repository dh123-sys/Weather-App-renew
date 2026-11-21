const input = document.getElementById("cityInput");
const result = document.getElementById("result");

input.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;

  const city = input.value.trim();
  if (!city) return;

  const response = await fetch("/temperature?city=" + encodeURIComponent(city));
  const data = await response.json();

  if (data.found) {
    result.textContent = data.city + ": " + data.temperature + "°C";
  } else {
    result.textContent = "City not found";
  }
});
