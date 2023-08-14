import { getLocation } from "./Searchbar";

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", getLocation);