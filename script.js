const pass = document.querySelector('#password')
const confirmPass = document.querySelector('#password-confirm')
const confirmPassText = document.querySelector('#password-confirm+span')

function checkPassMatch() {
    confirmPass.setAttribute("pattern", pass.value);
    if (confirmPass.value !== pass.value) {
        confirmPassText.style.visibility = 'visible';
    } else {
        confirmPassText.style.visibility = 'hidden';
    }
}

confirmPass.addEventListener("input", checkPassMatch);
pass.addEventListener("input", checkPassMatch);