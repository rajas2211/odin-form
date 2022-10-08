const pass = document.querySelector('#password')
const confirmPass = document.querySelector('#confirm-password')

confirmPass.addEventListener("input", (e) => {
    if (confirmPass.textContent !== pass.textContent) {
        console.log("*Passwords do not match!")
    }
});