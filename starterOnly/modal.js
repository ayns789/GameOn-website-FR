function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// form closure
const closeModal = document.querySelector(".close");
// data form
const form = document.getElementById("form");
// get first name elements in html
const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("firstNameError");
// get last name elements in html
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("lastNameError");
// get email elements in html
const email = document.getElementById("email");
const errorEmail = document.getElementById("emailError");
// get birthdate elements in html
const birthdate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("birthdateError");
// get quantity tournaments indicated in html
const quantityT = document.getElementById("quantity");
// get locations elements in html
let formVal = document.forms[0];
let locationT = formVal.querySelectorAll('input[name="location"]');
const errorLocation = document.getElementById('locationError');
// get checkbox options elements 
const checkboxVal1 = document.getElementById("checkbox1");
const checkboxVal2 = document.getElementById("checkbox2");
const errorCheckbox = document.getElementById("ckeckboxError");

// regex
const regexLetters = /^[a-zA-Z-\s]+$/;
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,}$/;
const regexBirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

//////////////////////////////
// types of addEventListener : keypress, keydown, click, mousedown, mouseup, mouseout, focus, blur, change, submit, input ...
/////////////////////////////

// ///////////////////////////////////////////////

// close modal form
closeModal.addEventListener('click', function() {
  // modalbg.remove();
  modalbg.style.display = "none";
});
/////////////////////////////////////////////

// get firstName user
firstName.addEventListener('change', checkFirstName);
// check firstName user
let firstNameOk = false;
let valFirstName = "";

function checkFirstName(e){
  let valFirstName = e.target.value;
  if( valFirstName.length < 2 ){
    errorFirstName.innerText = "Vous devez saisir au moins 2 caractères";
    errorFirstName.style.color = "red";
    errorFirstName.style.fontSize = "18px";
  } else if (!regexLetters.test(valFirstName)){ 
      errorFirstName.innerText = "Vous devez saisir uniquement des lettres";
      errorFirstName.style.color = "red";
      errorFirstName.style.fontSize = "18px";
    } else {
      errorFirstName.innerText = "";
      firstNameOk = true;
      return valFirstName;
    }
// block form if data are not corrects
e.preventDefault();
};
///////////////////////////////////////////

// check lastName user
lastName.addEventListener('change', checkLastName);

let lastNameOk = false;
let valLastName = "";

function checkLastName(e){
  let valLastName = e.target.value;
  if( valLastName.length < 2 ){
    errorLastName.innerText = "Vous devez saisir au moins 2 caractères";
    errorLastName.style.color = "red";
    errorLastName.style.fontSize = "18px";
    
  } else if (!regexLetters.test(valLastName)){ 
      errorLastName.innerText = "Vous devez saisir uniquement des lettres";
      errorLastName.style.color = "red";
      errorLastName.style.fontSize = "18px";
    } else {
      errorLastName.innerText = "";
      lastNameOk = true;
      return valLastName;
    }
// block form if data are not corrects
e.preventDefault();
};

///////////////////////////////

// check email user
email.addEventListener('change', checkEmail);

let emailOk = false;
let valEmail = "";

function checkEmail(e){
  let valEmail = e.target.value;
    if(valEmail.match(regexMail)){
      errorEmail.innerText = "";
      emailOk = true;
      return valEmail;
    } else {
      errorEmail.innerText = "Vous devez saisir une adresse email valide";
      errorEmail.style.color = "red";
      errorEmail.style.fontSize = "18px";
      emailOk = false;
    }
// block form if data are not corrects
e.preventDefault();
};

///////////////////////////////////////

// check birthdate user
birthdate.addEventListener('focusout', checkBirdthDate );

let birdthDateOk = false;
let valBirthdate = "";

function checkBirdthDate(e){
  let valBirthdate = e.target.value;
    if (valBirthdate.match(regexBirthdate)){
      errorBirthdate.innerText = "";
      birdthDateOk = true;
      return valBirthdate;
    } else {
      errorBirthdate.innerText = "Vous devez saisir votre date de naissance";
      errorBirthdate.style.color = "red";
      errorBirthdate.style.fontSize = "18px";
    }
  // block form if data are not corrects
  e.preventDefault();
  };


/////////////////////////////////////////

// check number of tournaments
quantityT.addEventListener('change', checkQuantity);

let valQuantityT = 0;

function checkQuantity(e){
  let val = e.target.value;
  if(val != null){
    valQuantityT = parseInt(val);
    return valQuantityT;
  } 
  alert(valQuantityT);
}


////////////////////////////////////////

let valCityOk = false;
let valCity = "";

 // check location selected
for(let i = 0;i < locationT.length;i++){

  locationT[i].addEventListener('click', function(e){
    valCity = locationT[i].value;
    valCityOk = true;
    alert(valCity)
    return valCity;
  })
};

function checkValCity(e){
  if(valCityOk){
    errorLocation.innerText = "";
    return valCity;
  } else {
    errorLocation.innerText = "Vous devez sélectionner une ville";
    errorLocation.style.color = "red";
    errorLocation.style.fontSize = "18px";
  }
}

  /////////////////////////////////////////

let valOption1ok = true;
let valOption2ok = false;
let isFormValid = firstNameOk && lastNameOk && emailOk && birdthDateOk && valCityOk && valOption1ok;

// check checkbox option 1 selected
checkboxVal1.onchange = function(e){
  if(checkboxVal1.checked){
    valOption1ok = true;
    alert("conditions sont cochées");
    errorCheckbox.innerText = "";
  } else {
    errorCheckbox.innerText = "Veuillez valider les conditions d'utilisation";
    errorCheckbox.style.color = "red";
    errorCheckbox.style.fontSize = "18px";
  }
}


// check checkbox option 2 selected
checkboxVal2.onchange = function(e){
  if(checkboxVal2.checked){
    valOption2ok = true;
    alert("conditions 2 sont cochées");
  } 
}

function checkConditions(e){

}

//////////////////////////////////////////
  // validation formulaire


function disableSubmit(disabled) {
  const buttonSubmit = document.getElementById('btn-submit');
  if (disabled) {
    buttonSubmit.setAttribute("disabled", true);
  } else {
    buttonSubmit.removeAttribute("disabled");
  }
}

form.addEventListener("change", (e) => {
  console.log(e, isFormValid);
  if(isFormValid){
    disableSubmit(false);
  } else {

    disableSubmit(true);
  }
})


const buttonSubmit = document.getElementById('btn-submit');
buttonSubmit.addEventListener('click', formValidation);

  function formValidation(e){

  checkFirstName(e);
  checkLastName(e);
  checkEmail(e);
  checkBirdthDate(e);
  checkQuantity(e);
  checkValCity(e);



  if(firstNameOk && lastNameOk && emailOk && birdthDateOk && valCityOk && valOption1ok){
    alert("le formulaire est valide");
    
    modalbg.style.display = "none";
    form.submit();
    form.reset();

  } else {
    alert("le formulaire est incomplet, veuillez le remplir");
    e.preventDefault();
  }
  // e.preventDefault();
  };

  ////////////////////////////////////////////////////////////////////////////////////////





