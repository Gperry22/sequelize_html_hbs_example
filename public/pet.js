var submit = document.getElementById("submit");
var name = document.getElementById("name");
var age = document.getElementById("age");
var color = document.getElementById("color");
var weight = document.getElementById("weight");

function getPets() {
  axios
    .get("/api/getPets")
    .then((result) => {
      console.log(result);
      pushStudentsToDom(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function pushStudentsToDom(data) {
  var petList = $("#studentList");

  data.forEach(function (cat) {
    var displayCat = $(`
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://i.imgur.com/OshJnhP.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${cat.name}</h5>
                    <h5 class="card-title">${cat.age}</h5>
                    <h5 class="card-title">${cat.color}</h5>
                   <h5 class="card-title">${cat.weight}</h5>
                </div>
        </div>
        `);
    petList.append(displayCat);
  });
}

submit.addEventListener("click", function (event) {
  event.preventDefault();

  if (age.value === "" || name.value === "") {
    alert("Enter Name and Age greater than 0");
  }
  var parseAge = parseInt(age.value);

  if (parseAge <= 0) {
    alert("Age must be greater than 0");
  }

  var user = {
    name: name.value,
    age: parseAge,
    weight: weight.value,
    color: color.value,
  };

  axios
    .post("/api/newPet", user)
    .then((result) => {
      console.log(result);
      location.href = "/pet";
    })
    .catch((err) => {
      console.log(err);
    });
});

getPets();
