
const firstNameInput = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");



const nameValidationHandler = (event) => {
    let message = [];
    const content = event.target.value;
        if (content === "") {
          firstNameError.textContent = "First name is required.";
          return
        } 
        if (!content[2] || content[10]){
            message.push("3-10 letters needed.");
        }
        if(!/^([^A-Z]|[^a-z])[a-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-\\]*$/.test(content) && content.length>1) {
            message.push("Only the first letter can be uppercase.");
        }
        if(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(content)) {
            message.push("Only supports spanish leters.");
        }
        firstNameError.innerHTML=`${message.join('<br>')}`;
      }
      
    firstNameInput.addEventListener("input", nameValidationHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lastNameInput = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");


const lastValidationHandler = (event) => {
    let message = [];
    const content = event.target.value;
        if (content === "") {
          lastNameError.textContent = "Last name is required.";
          return
        } 
        if (!content[1] || content[20]){
            message.push("2-20 letters needed.");
        }
        if(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ']/.test(content)) {
            message.push("Only supports spanish leters.");
        }
        lastNameError.innerHTML=`${message.join('<br>')}`;
      }
      
    lastNameInput.addEventListener("input", lastValidationHandler);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const dniInput = document.getElementById("dni");
    const cuitInput = document.getElementById("cuit");
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
}
if(flag){
    documentValidationHandler(documentInput.value)
}
flag = true;
}



    dniInput.addEventListener("change", dniHandler);
    cuitInput.addEventListener("change", cuitHandler);
    documentInput.addEventListener("input", ()=>{documentValidationHandler(event)});

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addressInput = document.getElementById("address");
const addressError = document.getElementById("address-error");
const addressValidationHandler = (event)=>{
    let message = [];
    const content = event.target.value;
    if(!content[19]){
        message.push("20 digits needed.");
        };
    if(/[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/u.test(content)) {
        message.push(`supports spanish and portugues leters, numbers and (-.,()'"°/) simbols`);
    }

addressError.innerHTML=`${message.join('<br>')}`;
}
addressInput.addEventListener("input", addressValidationHandler);

