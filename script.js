document.addEventListener("DOMContentLoaded", () => {

  // ================= CONTACT FORM =================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting OffGridLabs! We will get back to you soon.");
      this.reset();
    });
  }

  // ================= LOGIN FORM =================
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const msg = document.getElementById("loginMessage");
      if (msg) msg.style.display = "block";
    });
  }

  // ================= SIGNUP FORM =================
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const msg = document.getElementById("signupMessage");
      if (msg) msg.style.display = "block";
    });
  }

});