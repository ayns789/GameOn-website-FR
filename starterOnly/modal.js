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

///////////// regex //////////////
// check letters 
const regexLetters = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
// check email format
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,}$/;
// date checked true format between 1930 to 2009
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

// check navigator can use session storage 
// if(sessionStorage == null) {
  //   console.log("Storage non supporté par le navigateur");
  // }


////////////////////////////////////////////
// get firstName user
firstName.addEventListener('input', checkFirstName);

let firstNameOk = false;
let valFirstName = "";

// check firstname saved in session storage
if (sessionStorage.firstnameSaved) {
  firstName.value = sessionStorage.firstnameSaved;
} 

function checkFirstName(e){

  valFirstName = document.forms["form"]["first"].value;
  // save firstname in sessionStorage
  sessionStorage.setItem("firstnameSaved", valFirstName);

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
      return firstNameOk;
    }

};
///////////////////////////////////////////

// check lastName user
lastName.addEventListener('input', checkLastName);

let lastNameOk = false;
let valLastName = "";

// check lastname saved in session storage
if (sessionStorage.lastnameSaved) {
  lastName.value = sessionStorage.lastnameSaved;
} 

function checkLastName(e){
 
  valLastName = document.forms["form"]["last"].value;
  // save lastname in sessionStorage
  sessionStorage.setItem("lastnameSaved", valLastName);

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
      return lastNameOk;
    }
};

///////////////////////////////

// check email user
email.addEventListener('input', checkEmail);

let emailOk = false;
let valEmail = "";

// check email saved in session storage
if (sessionStorage.emailSaved) {
  email.value = sessionStorage.emailSaved;
} 

function checkEmail(e){
  
  valEmail = document.forms["form"]["email"].value;
  // save email in sessionStorage
  sessionStorage.setItem("emailSaved", valEmail);

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
};

///////////////////////////////////////

// check birthdate user
birthdate.addEventListener('change', checkBirdthDate );

let birdthDateOk = false;
let valBirthdate = "";

// check birthdate saved in session storage
if (sessionStorage.birdthdateSaved) {
  birthdate.value = sessionStorage.birdthdateSaved;
} 

function checkBirdthDate(e){
  
  valBirthdate = document.forms["form"]["birthdate"].value;
  // save birthdate in sessionStorage
  sessionStorage.setItem("birdthdateSaved", valBirthdate);

    if (valBirthdate.match(regexBirthdate)){
      errorBirthdate.innerText = "";
      birdthDateOk = true;
      return valBirthdate;
    } else {
      errorBirthdate.innerText = "Vous devez saisir votre date de naissance";
      errorBirthdate.style.color = "red";
      errorBirthdate.style.fontSize = "18px";
    }
  };


/////////////////////////////////////////

// check number of tournaments
quantityT.addEventListener('input', checkQuantity);

let valQuantityT;

// check quantity of tournaments saved in session storage
if (sessionStorage.quantityTSaved) {
  quantityT.value = parseInt(sessionStorage.quantityTSaved);
} 

function checkQuantity(e){

  valQuantityT = document.forms["form"]["quantity"].value;
  // save quantity of tournaments in sessionStorage
  sessionStorage.setItem("quantityTSaved", valQuantityT);

  if(valQuantityT == null){
    valQuantityT = 0;
  } 
  return valQuantityT;
  
}

////////////////////////////////////////

let valCityOk = false;
let valCity = "";

// take location selected in sessionStorage
let valCityChecked = Array.from(document.getElementsByName('location'));
let val1 = localStorage.getItem('cityChecked');

  for (let i = 0; i < valCityChecked.length; i++) {
    if (valCityChecked[i].value == val1) {
      valCityChecked[i].checked = true;
      valCity = valCityChecked[i].value;
      valCityOk = true;
    }
  }

 // check location selected to click
for(let i = 0;i < locationT.length;i++){

  locationT[i].addEventListener('click', function(e){

    valCity = locationT[i].value;
    valCityOk = true;

    // save location selected in sessionStorage
    let valCityChecked = document.querySelector('input[name=location]:checked').value;
    localStorage.setItem("cityChecked", valCityChecked);

    return valCity;
  })
};

 // check location selected in the form validation
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


// check checkbox option 2 selected to click
checkboxVal2.onchange = function(e){
  if(checkboxVal2.checked){
    valOption2ok = true;
    alert("option newsletter activée");
  } 
}


checkboxVal1.addEventListener('click', checkCondition1);

// check if checkox 1 selected to the form validation 
function checkCondition1(e){
  if(checkboxVal1.checked){
    errorCheckbox.innerText = "";
  } else {
    valOption1ok = false;
    errorCheckbox.innerText = "Veuillez valider les conditions d'utilisation";
    errorCheckbox.style.color = "red";
    errorCheckbox.style.fontSize = "18px";
    return valOption1ok;
  }
}

//////////////////////////////////////////

  // validation form

  // send form if conditions are ok
form.addEventListener("submit", (e) => {

    modalbg.style.display = "none";
    // sessionStorage.clear();
  
  e.preventDefault();
})


const buttonSubmit = document.getElementById('btn-submit');
buttonSubmit.addEventListener('click', formValidation);

  function formValidation(e){

    // check functions for the user can see the errors if they are
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirdthDate();
  checkQuantity();
  checkValCity();
  checkCondition1();
// alert("valFirstName : " + valFirstName + " , " + "valLastName : " + valLastName + " , " + "valEmail : " + valEmail + " , " +  "valBirthdate : " + valBirthdate  + " , " +  "valQuantityT : " + valQuantityT + " , " + "valCity : " + valCity + " , " + "valOption1ok : " + valOption1ok );
  
// check conditions to call the form submit
  if(checkFirstName(valFirstName) && checkLastName(valLastName) && checkEmail(valEmail) && checkBirdthDate(valBirthdate) && checkValCity(valCity) && valOption1ok == true){
    alert("le formulaire est bien enregistré");
    form.submit();
  } else {
    alert("le formulaire est incomplet, veuillez le remplir");
  }
  e.preventDefault();
  };

  ////////////////////////////////////////////////////////////////////////////////////////





