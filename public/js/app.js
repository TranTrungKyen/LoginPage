var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const $ = document.querySelector.bind(document)
const emailNotificationElement = $('.email-notification')
const passwordNotificationElement = $('.password-notification')
const submitElement = $('.btn-login')
let isCheckEmail = false
let isCheckPassWord = false

// Check email
// var user = {}
// email.onchange = (e) => {
//     if (!regex.test(e.target.value)) {
//         email.classList.add('border-red-500')
//         email.classList.add('outline-red-500')
//         emailNotificationElement.innerText = 'Trường này không hợp lệ'
//     } else {
//         email.classList.remove('border-red-500')
//         email.classList.remove('outline-red-500')
//         emailNotificationElement.innerText = ''
//         isCheckEmail = true
//         user.email = e.target.value
//     }
// }

// Check password
// password.onchange = (e) => {
//     if (e.target.value.length < 8) {
//         password.classList.add('border-red-500')
//         password.classList.add('outline-red-500')
//         passwordNotificationElement.innerText = 'Xin vui lòng nhập tối thiểu 8 ký tự'
//         return
//     } else {
//         password.classList.remove('border-red-500')
//         password.classList.remove('outline-red-500')
//         passwordNotificationElement.innerText = ''
//         isCheckPassWord = true
//         user.password = e.target.value

//     }
// }

// submitElement.onclick = () => {
//     if(isCheckEmail && isCheckPassWord){
//         console.log(user);
//         return user
//     }
// }

