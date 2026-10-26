//your JS code here. If required.

const form = document.getElementById("myForm");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

terms.addEventListener("change", function () {
  submitBtn.disabled = !terms.checked;
});

form.addEventListener("submit", function (event) {
  if (!form.checkValidity() || !terms.checked) {
    event.preventDefault();
    form.reportValidity();
  }
});
 