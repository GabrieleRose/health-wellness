let form = document.getElementById("mailing-list-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());
    console.log("our data:", dataObj);
    form.reset();
}
