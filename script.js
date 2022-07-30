const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const colorInput = document.getElementById("color");
const countryInput = document.getElementById("country");
const genderMaleInput = document.getElementById("gender-male");
const genderFemaleInput = document.getElementById("gender-female");

const cardsContainer = document.getElementById("cards-container");

clearInputs();

function clearInputs() {
    nameInput.value = "";
    ageInput.value = "";
    colorInput.value = "#00000";
    countryInput.value = "";
    genderMaleInput.checked = undefined;
    genderFemaleInput.checked = undefined;
}

function getUserInformationFromInputs() {
  let gender;

  if (genderMaleInput.checked) {
    gender = genderMaleInput.value;
  } else if (genderFemaleInput.checked) {
    gender = genderFemaleInput.value;
  }
  
    return {
        name: nameInput.value,
        age: ageInput.value,
        color: colorInput.value,
        countryInput: countryInput.value,
        gender,
    };
}

function renderCard(user) {
  return `<div class="card m-2"  tyle="background-color: ${user.color};">
<div class="card-header">  
 ${user.name} (${user.gender})
</div>
<div class="card-body">
  <h5 class="card-title">Is ${user.age} years old</h5>
  <p class="card-text">${user.country}/p>
  
</div>
`;
}

function validateUser(user) {
    if (user.name.length < 2) {
        return "user name must be at least two characters";
    } else if(user.name.length >50){
        return "user name must be lass than 50 charcters";
    }
    if (user.age > 120){
        return "are you sure you alive?";
    }
    return "";
    }
function showError(error) {
    alertContainer.innerHTML = `<div class="alert alert-warning">${error}</div>`;
}

function clearError(){
    alertContainer.innerHTML = "";
}

function submitInputs() {
    const userInformation = getUserInformationFromInputs();
    
    const error = validateUser(userInformation);
    if (error.length > 0) {
        showError(error);
        return;
    }

cardsContainer.innerHTML += renderCard(userInformation);
clearInputs();
}
