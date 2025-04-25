document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("outName").textContent = name;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("outMessage").textContent = message;
  document.getElementById("output").classList.remove("hidden");

  this.reset();
});
