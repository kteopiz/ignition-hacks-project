const createProfileButton = document.getElementById("createProfile");
const profileDisplay = document.getElementById("profileDisplay");

createProfileButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const description = document.getElementById("description").value;

  const profileHTML = `
    <h2>${name}</h2>
    <p>${age}, ${gender}</p>
    <p>${description}</p>
  `;

  profileDisplay.innerHTML = profileHTML;
  profileDisplay.style.display = "block";
});
