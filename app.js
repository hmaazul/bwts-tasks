const form = document.querySelector('#form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const mobileNumber = document.querySelector('#mobile-number')


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(checkInput([username,email,mobileNumber])){

    }
    else{
        if(checkLength(username,3,15) && checkEmail(email) && checkMobileNumber(mobileNumber)){
            alert(`Thankyou ${username.value} for filling out the registration form`)
        }
    
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
    return flag
}

function checkLength(input, min, max){
    let flag= false;
    if(input.value.trim().length < min){
        showError(input, `${input.id} must be atleast ${min} characters`)
    }
    else if(input.value.trim().length > max){
        showError(input, `${input.id} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
        flag = true;
    }
    return flag
}

function checkEmail(email){
    let falg = false;
    const pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/
    const isValid = pattern.test(email.value.trim())
    if(isValid){
        showSuccess(email)
        flag = true;
    }
    else{
        showError(email,`${email.id} is not valid`)
    }
    return flag
}

function checkMobileNumber(mobileNumber){
    let flag = false;
    if(mobileNumber.value.trim().length === 10){
        showSuccess(mobileNumber)
        flag = true;
    }
    else{
        showError(mobileNumber, `${mobileNumber.id} must be of 10 digits`)
    }
    return flag;
}

function showSuccess(input){
    const parent = input.parentElement
    parent.setAttribute("class","form-control success")
    const successMsg = parent.querySelector('small')
    // successMsg.innerText = `${input.id} is Valid`
}

function showError(input, message){
    const parent = input.parentElement
    parent.setAttribute("class","form-control error")
    const errorMsg = parent.querySelector('small')
    errorMsg.innerText = `${message}`
}