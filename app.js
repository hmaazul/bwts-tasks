const form = document.querySelector('#form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const mobileNumber = document.querySelector('#mobile-number')


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(checkInput([name,email,mobileNumber])){

    }
    else{
        checkLength(name,3,15)
        checkEmail(email)
        checkMobileNumber(mobileNumber)
    }
})

function checkInput(inputArr){
    let flag = false
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `Please fill the ${input.id}`)
            flag = true;
        }
    })
}

function checkLength(input, min, max){
    if(input.value.trim().length < min){
        showError(input, `${input.id} must be atleast ${min} characters`)
    }
    else if(input.value.trim().length > max){
        showError(input, `${input.id} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}

function checkEmail(email){
    const pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/
    const isValid = pattern.test(email.value.trim())
    if(isValid){
        showSuccess(email)
    }
    else{
        showError(email,`${email.id} is not valid`)
    }
}

function checkMobileNumber(mobileNumber){
    if(mobileNumber.value.trim().length === 10){
        showSuccess(mobileNumber)
    }
    else{
        showError(mobileNumber, `${mobileNumber.id} must be of 10 digits`)
    }
}

function showSuccess(input){
    const parent = input.parentElement
    const successMsg = parent.querySelector('small')
    successMsg.innerText = `${input.id} is Valid`
}

function showError(input, message){
    const parent = input.parentElement
    const errorMsg = parent.querySelector('small')
    errorMsg.innerText = `${message}`
}