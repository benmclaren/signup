const form = document.querySelector('.form-sign-up');
const firstName = document.getElementById('first-name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const jobTitle = document.getElementById('job-title');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const type = document.getElementById('dropdown');

// form only neeeds to submit of all fields are filled in, passwords match and email is valid
const submitData = () => {
  formData = { 
    firstName: null,
    surname: null,
    email: null,
    phoneNumber: null,
    jobTitle: null,
    password: null,
    discovery: null
  } 

  formData.firstName = firstName.value;
  formData.surname = surname.value;
  formData.email = email.value;
  formData.phoneNumber = phoneNumber.value;
  formData.jobTitle = jobTitle.value;
  formData.password = password.value;
  formData.discovery = type.value;
  console.log(formData);
  console.log('submitted');
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  // if the validations are passed then the submitData function will run 
 
  checkInputs();
  // store all the values in an array
  formValues = [firstName.value, surname.value, email.value, phoneNumber.value, jobTitle.value, password.value, passwordConfirm.value];
  // use the .check to see if value is not empty. Also check passwords match.
  if( formValues.every(value => value != '') && password.value === passwordConfirm.value) {
    submitData(); 
  }
});

const checkInputs = () => {
  // get the values of all the inputs
  const firstNameValue = firstName.value
  const surnameValue = surname.value
  const emailValue = email.value
  const phoneNumberValue = phoneNumber.value
  const jobTitleValue = jobTitle.value
  const passwordValue = password.value
  const passwordConfirmValue = passwordConfirm.value


  // perform a check on each input to check if its blank
  
  if(firstNameValue === '') {
    // if its blank then the setErrorFor function is called
    setErrorFor(firstName, 'Name cannot be blank');
  } else {
    // if its not blank then the success function runs
    setSuccessFor(firstName);
  } 

  if(surnameValue === '') {
    setErrorFor(surname, "Surname cannot be blank");
  } else {
    setSuccessFor(surname);
  }

  if(emailValue === '') {
    setErrorFor(email, "Email cannot be blank");
  } else if (!checkEmailIsValid(emailValue)) {
    setErrorFor(email,"Email is invalid");
  } else {
    setSuccessFor(email);
  }

  if(phoneNumberValue === '') {
    setErrorFor(phoneNumber, "Phone number cannot be blank");
  } else {
    setSuccessFor(phoneNumber);
  }

  if(jobTitleValue === '') {
    setErrorFor(jobTitle, "Job title cannot be blank");
  } else {
    setSuccessFor(jobTitle);
  }

  if(passwordValue === '') {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if(passwordConfirmValue === '') {
    setErrorFor(passwordConfirm, "Password cannot be blank");
  } else if(passwordValue !== passwordConfirmValue) {
    setErrorFor(passwordConfirm, 'Passwords do not match');
  } else {
    setSuccessFor(passwordConfirm);
  } 
}
  
const setErrorFor = (input, errorMessage) => {
  // finds the parent of the input that is being targeted 
  const field = input.parentElement;
  // find the p tag of the specific input
  const errorP = field.querySelector('.error-message');
  // update text with error message
  errorP.innerText = errorMessage;
  // add class for styling
  field.className ="field error";
  return false;
};

const setSuccessFor = (input) => {
  const field = input.parentElement;
  field.className = "field complete";
};

const checkEmailIsValid = (email) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailValidation.test(email)) {
    return true;
  } else {
    return false;
  }
};
