("use strict");
let signUp = document.querySelector(".signUp");
let Authentication = document.querySelector(".Authentication");
let signUp_btn = document.querySelector(".signUp_btn");
let logIn_btn = document.querySelector(".logIn_btn");

signUp_btn.addEventListener("click", function () {
  Authentication.classList.remove("left-1/2");
  Authentication.classList.add("-left-1/2");
  signUp.classList.remove("translate-x-full");
  signUp.classList.add("-translate-x-1/2");
});

logIn_btn.addEventListener("click", function () {
  Authentication.classList.add("left-1/2");
  Authentication.classList.remove("-left-1/2");
  signUp.classList.add("translate-x-full");
  signUp.classList.remove("-translate-x-1/2");
});

/////////////////////////////////////////////////////

let sign_up_submit = document.querySelector("#sign_up_submit");

function signUpUser() {
  let fisrt_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let age = document.getElementById("age").value;
  let birth = document.getElementById("birth").value;
  let data = new FormData();

  data.append("first_name", fisrt_name);
  data.append("last_name", last_name);
  data.append("age", age);
  data.append("birth", birth);

  fetch("http://localhost/Dental-Clinic-projrct/api/users/create.php", {
    method: "post",
    body: data,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function emptyForm() {
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("birth").value = "";
}

sign_up_submit.addEventListener("click", () => {
  signUpUser();
  emptyForm();
});
