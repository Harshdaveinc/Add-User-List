alert(" Not Responsive !! Only For Computer Screen !! Made By Harsh");
const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usersList = document.querySelector("#users");
msg.style.color = "red";
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Enter Both Name And Email";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`  ${nameInput.value} : ${emailInput.value}`)
    );
    usersList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}