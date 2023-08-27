const createProfileButton = document.getElementById("createProfile");
const profileDisplay = document.getElementById("profileDisplay");

createProfileButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const description = document.getElementById("description").value;
  const read = document.getElementById("read").value;
  const videoGames = document.getElementById("videoGames").value;
  const artistic = document.getElementById("artistic").value;
  const parties = document.getElementById("parties").value;
  const campus = document.getElementById("campus").value;
  const showGenre = document.getElementById("showGenre").value;
  const musicGenre = document.getElementById("musicGenre").value;
  const socialBattery = document.getElementById("socialBattery").value;
  const timePreference = document.getElementById("timePreference").value;
  const location = document.getElementById("location").value;

  const profileHTML = `
    <h2>${name}</h2>
    <p>${age}, ${gender}</p>
    <p>${description}</p>
    <p>read? ${read}</p>
    <p>video games? ${videoGames}</p>
    <p>artsy? ${artistic}</p>
    <p>party-goer? ${parties}</p>
    <p>attending campus events? ${campus}</p>
    <p>favourite tv show genre: ${showGenre}</p>
    <p>favourite music genre: ${musicGenre}</p>
    <p>social battery: ${socialBattery}</p>
    <p>time preferences: ${timePreference}</p>
    <p>favourite location to go to: ${location}</p>
  `;
  profileDisplay.innerHTML = profileHTML;
  profileDisplay.style.display = "block";
});