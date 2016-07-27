function printName() {
    document.getElementById("outputName").innerHTML = inputName.value;
}

// Submit
function formSubmit() {
    if (!inputName.value) {
        alert("Please complete all required sections");
    }
}

function increaseFontSize() {
    document.getElementById('outputName').style.fontSize = '150px';
}

function changeCase() {
    document.getElementById('outputName').style.textTransform='uppercase';
}

function changeFont() {
    document.getElementById('outputName').style.fontFamily = 'Playfair Display';
}

function formReset() {
    window.location.reload();
}