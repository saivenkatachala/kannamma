document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      method: "POST",
      body: data
    })
      .then(res => res.text())
      .then(msg => {
        document.getElementById("responseMsg").textContent = "Order submitted successfully!";
        form.reset();
      })
      .catch(err => {
        document.getElementById("responseMsg").textContent = "Failed to submit. Try again.";
      });
  });
  