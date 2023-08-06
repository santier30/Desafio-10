
const firstNameInput = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");
const firstNameDiv = document.getElementById("first__name-div");


const checkForm = () => {
    allErrorsMessage(...formValidation())
}
const nameValidationHandler = (event) => {
    const content = typeof event === "string"?event:event.target.value;
    let allMessage = [];
    for (i of content.split(" ")) {
    let message = [];
        if (i === "") {
            message.push =( "First name cant be empty.");
          continue
        } 
        if (!i[2] || i[10]){
            message.push("3-10 letters needed.");
        }
        if(!/^([^A-Z]|[^a-z])[a-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-\\]*$/.test(i) && i.length>1) {
            message.push("Only the first letter can be uppercase.");
        }
        if(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(i)) {
            message.push("Only supports spanish leters.");
        }

        message[0]?allMessage.push(`name: ${i} <br> ${message.join('<br>')}`):"";
        
    }
        firstNameError.innerHTML=`${allMessage.join('<br> <br>')}`;
      return allMessage.join('<br> <br>')
      }

      
const nameFocusHandler = (event)=>{
        firstNameError.style.right = 0;
        firstNameError.style.visibility = "visible";
}
const nameBlurHandler = (event)=>{
    firstNameError.style.right = "10%";
    firstNameError.style.visibility = "hidden";
}

    // firstNameInput.addEventListener("input", nameValidationHandler);
    firstNameInput.addEventListener("input", checkForm);
    firstNameInput.addEventListener("focus", nameFocusHandler);
    firstNameInput.addEventListener("blur", nameBlurHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lastNameInput = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");

const lastValidationHandler = (event) => {
    const content = typeof event === "string"?event:event.target.value;
    let allMessage = [];
    for (i of content.split(" ")) {
    let message = [];
    if (content === "") {
        message.push("Last name is required.");
        continue
      } 
      if (!i[1] || i[20]){
          message.push("2-20 letters needed.");
      }
      if(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ']/.test(i)) {
          message.push("Only supports spanish leters.");
      }

        message[0]?allMessage.push(`surname: ${i} <br> ${message.join('<br>')}`):"";
        
    }
        lastNameError.innerHTML=`${allMessage.join('<br> <br>')}`;
      return allMessage.join('<br> <br>')
      }

const lastFocusHandler = (event)=>{
    lastNameError.style.right = 0;
    lastNameError.style.visibility = "visible";
}
const lastBlurHandler = (event)=>{
    lastNameError.style.right = "10%";
    lastNameError.style.visibility = "hidden";
}
      
    // lastNameInput.addEventListener("input", lastValidationHandler);
    lastNameInput.addEventListener("input", checkForm);
    lastNameInput.addEventListener("focus", lastFocusHandler);
    lastNameInput.addEventListener("blur", lastBlurHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const dniInput = document.getElementById("dni");
    const cuitInput = document.getElementById("cuit");
    const documentTypeError = document.getElementById("document-type-error");
    const documentInput = document.getElementById("document-number");
    const documentError = document.getElementById("document-number-error");

let documentValidationHandler = ()=>{}
let flag = false;
const dniHandler = ()=>{
documentInput.removeAttribute('disabled');
documentValidationHandler = (event)=>{
    let message = [];
    const content = typeof event === "string" ? event: event.target.value;
    if (content === "") {
        documentError.textContent = "Document number is required.";
        return
      }
        if (content.includes(".")){
            if(!content[8] || content[10]){
            documentInput.maxLength =10;
            message.push("9-10 digits needed.");

            }
            if(!/^\d{1,2}\.\d{3}\.\d{3}$/.test(content)){
                message.push("2 . permited only separing posible thousends");
            }
        }else if(!content[6] || content[8]){
            documentInput.maxLength =8;
            message.push("7-8 digits needed.");
        };
        if(/[^0-9.]/.test(content)){
            message.push("Only numbers and . allowed");
        }

        documentError.innerHTML=`${message.join('<br>')}`;
        return message.join('<br>')
        
}
    if(flag){
    documentValidationHandler(documentInput.value)

}
    flag = true;
    
}

const cuitHandler = ()=>{
documentInput.removeAttribute('disabled');
documentValidationHandler = (event)=>{
    let message = [];
    const content = typeof event === "string"?event:event.target.value;
    if (content === "") {
        documentError.textContent = "Cuit number is required.";
        return
      }
        if (content.includes("-")){
            if(!content[12]){
            documentInput.maxLength =13;
            message.push("13 digits needed.");

            }
            if(!/^\d{2}\-\d{8}\-\d{1}$/.test(content)){
                message.push("2 - permited only separing prefix and sufix");
            }
        }else if(!content[10]){
            documentInput.maxLength =11;
            message.push("11 digits needed.");
        };
        if(/[^0-9-]/.test(content)){
            message.push("Only numbers and - allowed");
   
}
documentError.innerHTML=`${message.join('<br>')}`;
return message.join('<br>')
}
if(flag){
    documentValidationHandler(documentInput.value)
}
flag = true;

}

const documentFocusHandler = (event)=>{
    documentError.style.right = 0;
    documentError.style.visibility = "visible";
}
const documentBlurHandler = (event)=>{
    documentError.style.right = "10%";
    documentError.style.visibility = "hidden";
}

    dniInput.addEventListener("change", dniHandler);
    cuitInput.addEventListener("change", cuitHandler);
    dniInput.addEventListener("change", checkForm);
    cuitInput.addEventListener("change", checkForm);
    // documentInput.addEventListener("input", ()=>{documentValidationHandler(event)});
    documentInput.addEventListener("input", checkForm);
    documentInput.addEventListener("focus", documentFocusHandler);
    documentInput.addEventListener("blur", documentBlurHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addressInput = document.getElementById("address");
const addressError = document.getElementById("address-error");
const addressValidationHandler = (event)=>{
    let message = [];
    const content = typeof event === "string"?event:event.target.value;
    if(!content[19]){
        message.push("20 digits needed.");
        };
    if(/[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/u.test(content)) {
        message.push(`supports spanish and portugues leters, numbers and (-.,()'"°/) simbols`);
    }

addressError.innerHTML=`${message.join('<br>')}`;
return message.join('<br>')
}

const addressFocusHandler = (event)=>{
    addressError.style.right = 0;
    addressError.style.visibility = "visible";
}
const addressBlurHandler = (event)=>{
    addressError.style.right = "10%";
    addressError.style.visibility = "hidden";
}

// addressInput.addEventListener("input", addressValidationHandler);
addressInput.addEventListener("input", checkForm);
addressInput.addEventListener("focus", addressFocusHandler);
addressInput.addEventListener("blur", addressBlurHandler);

///////////////////////////////////////////////////BONUS////////////////////////////////////////////////////////////
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

const emailValidationHandler = (event) => {
  const content = typeof event === "string" ? event : event.target.value;
  let message = [];

  if (content === "") {
    message.push("Email address can't be empty.");
  }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(content)) {
    message.push("Invalid email address.");
  }

  emailError.innerHTML = message.join('<br>');
  return message.join('<br>');
};

const emailFocusHandler = (event) => {
  emailError.style.right = 0;
  emailError.style.visibility = "visible";
};

const emailBlurHandler = (event) => {
  emailError.style.right = "10%";
  emailError.style.visibility = "hidden";
};

emailInput.addEventListener("input", checkForm);
emailInput.addEventListener("focus", emailFocusHandler);
emailInput.addEventListener("blur", emailBlurHandler);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postalCodeInput = document.getElementById('postal-code');
const postalCodeError = document.getElementById('postal-code-error');

const postalCodeValidationHandler = (event) => {
  const content = typeof event === "string" ? event : event.target.value;
  let message = [];

  if (content === "") {
    message.push("Código Postal can't be empty.");
  }else if (!/^\d{4}$/.test(content)) {
    message.push("Invalid postal code. It should be a 4-digit number.");
  }

  postalCodeError.innerHTML = message.join('<br>');
  return message.join('<br>');
};

const postalCodeFocusHandler = (event) => {
  postalCodeError.style.right = 0;
  postalCodeError.style.visibility = "visible";
};

const postalCodeBlurHandler = (event) => {
  postalCodeError.style.right = "10%";
  postalCodeError.style.visibility = "hidden";
};

postalCodeInput.addEventListener("input", checkForm);
postalCodeInput.addEventListener("focus", postalCodeFocusHandler);
postalCodeInput.addEventListener("blur", postalCodeBlurHandler);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const phoneNumberInput = document.getElementById('phone-number');
const phoneNumberError = document.getElementById('phone-number-error');

const phoneNumberValidationHandler = (event) => {
  const content = typeof event === "string" ? event : event.target.value;
  let message = [];

  if (content === "") {
    message.push("Número de teléfono can't be empty.");
  }else if (!/^\+54\s?(11|15)\s?\d{8}$/.test(content)) {
    message.push("Invalid phone number. The phone number should be in the format +54 11 or +54 15 followed by 8 digits.");
  }

  phoneNumberError.innerHTML = message.join('<br>');
  return message.join('<br>');
};

const phoneNumberFocusHandler = (event) => {
  phoneNumberError.style.right = 0;
  phoneNumberError.style.visibility = "visible";
};

const phoneNumberBlurHandler = (event) => {
  phoneNumberError.style.right = "10%";
  phoneNumberError.style.visibility = "hidden";
};

phoneNumberInput.addEventListener("input", checkForm);
phoneNumberInput.addEventListener("focus", phoneNumberFocusHandler);
phoneNumberInput.addEventListener("blur", phoneNumberBlurHandler);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const dobInput = document.getElementById('dob');
const dobError = document.getElementById('dob-error');

const dobValidationHandler = (event) => {
  const content = typeof event === "string" ? event : event.target.value;
  let message = [];

  if (content === "") {
    message.push("Date of birth can't be empty.");
  } else {
    // Parse the date of birth into a Date object
    const dobDate = new Date(content);
    const today = new Date();

    // Calculate the difference in years between the current date and the date of birth
    const ageDifference = today.getFullYear() - dobDate.getFullYear();

    // Check if the person is older than 18
    if (ageDifference < 18) {
      message.push("Must be 18 or older.");
    }
  }

  dobError.innerHTML = message.join('<br>');
  return message.join('<br>');
};

const dobFocusHandler = (event) => {
  dobError.style.right = 0;
  dobError.style.visibility = "visible";
};

const dobBlurHandler = (event) => {
  dobError.style.right = "10%";
  dobError.style.visibility = "hidden";
};

dobInput.addEventListener("input", checkForm);
dobInput.addEventListener("focus", dobFocusHandler);
dobInput.addEventListener("blur", dobBlurHandler);


///////////////////////////////////////////////BONUS////////////////////////////////////////////////////////////////
const reset = document.getElementById('reset');

const resetHandler = () => {
    // Reset First Name field
    firstNameInput.value = "";
    firstNameError.textContent = "";
  
    // Reset Last Name field
    lastNameInput.value = "";
    lastNameError.textContent = "";
  
    // Reset Document Type fields
    dniInput.checked = false;
    cuitInput.checked = false;
    documentTypeError.textContent = "";
  
    // Reset Document Number field
    documentInput.value = "";
    documentError.textContent = "";
  
    // Reset Address field
    addressInput.value = "";
    addressError.textContent = "";
  
    // Reset Email field
    emailInput.value = "";
    emailError.textContent = "";
  
    // Reset Postal Code field
    postalCodeInput.value = "";
    postalCodeError.textContent = "";

    // Reset Date of Birth field
    phoneNumberInput.value = "";
    phoneNumberError.textContent = "";
  
    // Reset Date of Birth field
    dobInput.value = "";
    dobError.textContent = "";
  
    // Reset form-level error message
    formError.textContent = "";
  };
  

reset.addEventListener("click", resetHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const form = document.getElementById('personalInfo')
const formError = document.getElementById('form-error')

const formValidation = ()=>{
    let nameEr = nameValidationHandler(firstNameInput.value);
    let lastEr = lastValidationHandler(lastNameInput.value);
    let radEr = dniInput.checked || cuitInput.checked?"":"select one";
    documentTypeError.innerHTML = radEr ;
    let idEr = documentValidationHandler(documentInput.value);
    let emailEr = emailValidationHandler(emailInput.value);
    let addressEr = addressValidationHandler(addressInput.value);
    let pcEr = postalCodeValidationHandler(postalCodeInput.value);
    let phoneEr = phoneNumberValidationHandler(phoneNumberInput.value);
    let dobEr = dobValidationHandler(dobInput.value);
    return [nameEr , lastEr , radEr , idEr , addressEr,emailEr,pcEr,phoneEr,dobEr];
}
const allErrorsMessage = (nameEr , lastEr , radEr , idEr , addressEr , emailEr,pcEr,phoneEr,dobEr)=>{
    let message =[]
    message.push("All Errors: <br>" )
    nameEr?message.push(`Name: <br>${nameEr} <br>`):"";
    lastEr?message.push(`Surname: <br>${lastEr} <br>`):"";
    radEr?message.push(`ID type: <br>${radEr} <br>`):"";
    idEr?message.push(`ID: <br>${idEr} <br>`):"";
    emailEr?message.push(`Email: <br>${emailEr} <br>`):"";
    pcEr?message.push(`Postal code: <br>${pcEr} <br>`):"";
    phoneEr?message.push(`Phone number: <br>${phoneEr} <br>`):"";
    dobEr?message.push(`Date of birth: <br>${dobEr} <br>`):"";
    addressEr?message.push(`Address: <br>${addressEr} <br>`):"";
    formError.innerHTML = `${message.join('<br>')}`;
}

const submitHandler = (event) => {
    event.preventDefault();
    const [nameEr , lastEr , radEr , idEr , addressEr,emailEr, pcEr,phoneEr,dobEr] = formValidation()

        if(!nameEr && !lastEr && !idEr && !radEr && !addressEr && !emailEr && !pcEr && !phoneEr && !dobEr) {
            form.submit()
    }else{
        allErrorsMessage(nameEr , lastEr , radEr , idEr , addressEr, pcEr)
    }


}

form.addEventListener("submit", submitHandler);


