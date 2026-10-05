const form = document.querySelector(".email-content");
const emailInput = document.querySelector(".email-text");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function(event){
  event.preventDefault();
  

  if(!emailInput.validity.valid){
    errorMessage.style.display = "block";
    emailInput.classList.add("error");
  }else{
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");

    localStorage.setItem("email", emailInput.value);
    
    window.location.href = "success.html";
  }
});

