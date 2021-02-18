var submit = document.getElementById("submit");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gender = document.getElementById("gender");

function getStudents() {
  axios
    .get("/api/getStudents")
    .then((result) => {
      console.log(result);
      pushStudentsToDom(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function pushStudentsToDom(data) {
  var student = $("#studentList");

  data.forEach(function (classMember) {
    var displayStudent = $(`
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://i.imgur.com/OshJnhP.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${classMember.name}</h5>
                    <h5 class="card-title">${classMember.age}</h5>
                    <h5 class="card-title">${classMember.gender}</h5>
                </div>
        </div>
        `);
    student.append(displayStudent);
  });
}

submit.addEventListener("click", function (event) {
  event.preventDefault();

  if (age.value === "" || firstName.value === "") {
    alert("Enter Name and Age greater than 5");
  }
  var parseAge = parseInt(age.value);

  if (parseAge <= 5) {
    alert("Age must be greater than 5");
  }

  var user = {
    name: firstName.value,
    age: parseAge,
    gender: gender.value,
  };

  axios
    .post("/api/newStudent", user)
    .then((result) => {
      console.log(result);
      location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
});

getStudents();
