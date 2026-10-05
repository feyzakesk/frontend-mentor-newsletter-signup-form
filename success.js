const userEmail = document.querySelector("#user-email");

const email = localStorage.getItem("email");

userEmail.textContent = email;

const dismissButton = document.querySelector(".dismiss-button");

dismissButton.addEventListener("click",function(){
  window.location.href = "index.html";

});