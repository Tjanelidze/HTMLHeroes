const links = document.getElementById("links");
const profile = document.getElementById("profile");
const profilePage = document.getElementById("profilePageDetails");
const linksPage = document.getElementById("linksPage");

links.addEventListener("click", () => {
  profilePage.style.display = "none";
  linksPage.style.display = "block";
});

profile.addEventListener("click", () => {
  profilePage.style.display = "block";
  linksPage.style.display = "none";
});
