let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let form = document.querySelector(".my-form");
let btn = document.querySelector(".btn");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      let linkId = document.querySelector("header nav a[href*=" + id + "]");
      if (linkId) {
        linkId.classList.add("active");
      }
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

emailjs.init("9fsJJqLTDf77BCNC6");

function showNotification(message) {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
  notificationElement.style.display = "block";

  setTimeout(() => {
    notificationElement.style.display = "none";
  }, 3000);
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_j9ic1a5", "template_7ueub3x", this).then(
      () => {
        showNotification(`Mesajınız uğurla göndərildi!`);
      },
      (error) => {
        console.log(error);
        showNotification(
          `Mesaj göndərilərkən problem yaşandı. Zəhmət olmasa yenidən cəhd edin`
        );
      }
    );
    this.reset();
  });
