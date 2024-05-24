function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  let apiKey = "at4d96bda05b6f73380b5219of43773b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?lon=${city}&key=${apiKey}&units=metric`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
