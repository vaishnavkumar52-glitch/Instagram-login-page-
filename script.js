function fakeLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Store in browser TEMPORARILY (not uploaded, not saved, not sent anywhere)
  localStorage.setItem("demoEmail", email);
  localStorage.setItem("demoPassword", password);

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}


---
