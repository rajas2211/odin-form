const pass = document.querySelector('#password')
const confirmPass = document.querySelector('#password-confirm')
const confirmPassText = document.querySelector('#password-confirm+span')
var confirmPassVisited = false;

function checkPassMatch() {
    confirmPass.setAttribute("pattern", pass.value);
    if (confirmPass.value !== pass.value) {
        confirmPassText.style.visibility = 'visible';
    } else {
        confirmPassText.style.visibility = 'hidden';
    }
}

confirmPass.addEventListener("input", () => {
    checkPassMatch();
    confirmPassVisited = true;
});

confirmPass.addEventListener("focus", () => {
    confirmPassVisited = true;
});

pass.addEventListener("input", () => {
    if (confirmPassVisited) {
        checkPassMatch();
    }
});