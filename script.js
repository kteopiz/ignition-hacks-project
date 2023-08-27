const createProfileButton = document.getElementById("createProfile");
const profileDisplay = document.getElementById("profileDisplay");

createProfileButton.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
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
    <h2>${fname} ${lname}</h2> 
    <p>${age}, ${gender}</p>
    <p>Tell Me About Yourself: ${description}</p>
    <p>Reading Habits: ${read}</p>
    <p>Gaming Habits:  ${videoGames}</p>
    <p>Artsy: ${artistic}</p>
    <p>Party-Goer: ${parties}</p>
    <p>Involvement in Campus Events: ${campus}</p>
    <p>Favourite TV Show Genre: ${showGenre}</p>
    <p>Favourite Music Genre: ${musicGenre}</p>
    <p>Personality: ${socialBattery}</p>
    <p>Early Bird or Night Owl: ${timePreference}</p>
    <p>Favourite Campus Locations: ${location}</p>

  `;

  profileDisplay.innerHTML = profileHTML;
  profileDisplay.style.display = "block";
});
