let form = document.getElementById('signUpForm');
let nameInputField = document.getElementById('fullnameField');
let emailInputField = document.getElementById('emailField');
let passwordInputField = document.getElementById('passwordField');
let button = document.getElementById('button');

let fullnameError = document.getElementById('fullNameErrorMessage');
let fullNameExclamation = document.getElementById('fullNameExclamation')
let fullNameCircleCheck = document.getElementById('fullNameCircleCheck')

let emailErrorMessage = document.getElementById('emailErrorMessage')
let emailExclamation = document.getElementById('emailExclamation')
let emailCircleCheck = document.getElementById('emailCircleCheck')

let passwordErrorMessage = document.getElementById('passwordErrorMessage')
let passwordExclmation = document.getElementById('passwordExclmation')
let passwordCircleCheck = document.getElementById('passwordCircleCheck')



form.addEventListener('submit', function(event){
    event.preventDefault()
    formValidation()
})


function formValidation(){
    // validation for nameField
    if(nameInputField.value.trim() === '') {
        fullnameError.innerText = 'write your fullname'
        nameInputField.style.border = '1px solid red'
        fullNameExclamation.style.visibility = 'visible'
    }else if(nameInputField.value.trim().length < 6) {
        fullnameError.innerText = 'Full Name needs to be more than  6 letters'
        nameInputField.style.border = '1px solid red'
        fullNameExclamation.style.visibility = 'visible'
    } else {
        fullNameExclamation.style.visibility = 'hidden'
        fullNameCircleCheck.style.visibility = 'visible'
        nameInputField.style.border = '1px solid green'
        fullnameError.innerText = ''

    }

    // Email field Validation

    if(emailInputField.value.trim() === '') {
        console.log(emailErrorMessage.innerText = 'enter your email address')
        emailInputField.style.border = '1px solid red'
        emailExclamation.style.visibility = 'visible'
    } else if(validEmail(emailInputField.value)) {
        emailErrorMessage.visibility = 'hidden'
        emailInputField.style.border = '1px solid green'
        emailExclamation.style.visibility = 'hidden'
        emailCircleCheck.style.visibility = 'visible'
    } else {
        emailExclamation.style.visibility = 'visible'
        emailCircleCheck.style.visibility = 'hidden'
        emailInputField.style.border = '1px solid red'
        emailErrorMessage.innerText = ''

    }



function validEmail(emailOfUser){
    const regulaeExpression =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let myTest = regulaeExpression.test(emailOfUser)
    return myTest
}

// password validation

if(passwordInputField.value.trim() === '') {
    console.log(passwordErrorMessage.innerText = 'Enter your password')
    passwordInputField.style.border = '1px solid red'
    passwordExclmation.style.visibility = 'visible'
}else if(passwordInputField.value.length < 8) {
    passwordErrorMessage.innerText = 'Password needs to be than 8 or more letters and include characters'
    passwordInputField.style.border = '1px solid red'
    passwordExclmation.style.visibility = 'visible'
} else {
    passwordExclmation.style.visibility = 'hidden'
    passwordCircleCheck.style.visibility = 'visible'
    passwordInputField.style.border = '1px solid green'
    passwordErrorMessage.innerText = ''

}
}