const menuMobileIcon = document.querySelector(".menu-mobile-icon");
const menuMobile = document.querySelector(".menu-mobile");
menuMobileIcon.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});
const menuMobileClose = document.querySelector(".close");
menuMobileClose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

document.querySelectorAll(".menu-mobile-item").forEach((item) => {
  item.addEventListener("click", () => {
    const submenu = item.nextElementSibling;
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
      // bacground menu mobile-item blue
      item.classList.add("active");
    }
  });
});

function toggleSubmenu(element) {
  const submenu = element.querySelector(".submenu");
  const isVisible = submenu.style.display === "block";
  document
    .querySelectorAll(".submenu")
    .forEach((sub) => (sub.style.display = "none"));
  submenu.style.display = isVisible ? "none" : "block";
}

function changeImage(element) {
  var mainImage = document.getElementById("main-image");
  mainImage.src = element.src;
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document
    .getElementsByClassName("tabs")[0]
    .getElementsByTagName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// chatbot
const chatIcon = document.getElementById("chatIcon");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");

chatIcon.addEventListener("click", () => {
  chatContainer.style.display = "flex";
  chatIcon.style.display = "none";
});

closeChat.addEventListener("click", () => {
  chatContainer.style.display = "none";
  chatIcon.style.display = "flex";
});
