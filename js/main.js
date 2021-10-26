/* FORM FUNCTIONS */

const resetButton = document.getElementById('reset');
const submitButton = document.getElementById('submit');

const resetFunction = () => {
    document.getElementById('contactForm').reset();
}

const submitFunction = () => {
    alert('This form is not really functional but your message should have been sent by clicking this button.');
}

resetButton.onclick = resetFunction;
submitButton.onclick = submitFunction;