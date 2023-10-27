// Function to show the popup with submitted data
function showPopup(data) {
    const popup = document.getElementById('popup');
    const popupData = document.getElementById('popup-data');
    popupData.innerHTML = data;
    popup.style.display = 'flex';
}

// Function to reset the form
function resetForm() {
    document.getElementById('survey-form').reset();
}

// Submit button click event
document.getElementById('submit-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const choose = document.getElementsByName('choose');
    const selectedChoose = Array.from(choose)
        .filter(input => input.checked)
        .map(input => input.value)
        .join(', ');
    const option = document.getElementsByName('option');
    const selectedOption = Array.from(option)
        .filter(input => input.checked)
        .map(input => input.value)
        .join(', ');
    const input = document.getElementsByName('input');
    const selectedInput = Array.from(input)
        .filter(input => input.checked)
        .map(input => input.value)
        .join(', ');
    const suggestion = document.getElementById('suggestion').value;


    // Validate the form fields (you can add more specific validations)
    if (name && email && selectedChoose && selectedOption && selectedInput && suggestion) {
        const submittedData = `
            Name: ${name}
            Email: ${email}
            Is this first time You are using our products & service?: ${selectedChoose}
            Would you suggest to your friends and colleagues?: ${selectedOption}
            How satisfied are you with our company overall?: ${selectedInput}
            Do you have suggestion to improve our service?: ${suggestion}
        `;
        showPopup(submittedData);
    } else {
        alert('Please fill out all required fields.');
    }
});

// Reset button click event
document.getElementById('reset-btn').addEventListener('click', resetForm);

// Close popup button click event
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    resetForm();
});