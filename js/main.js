/* FORM FUNCTIONS */

const resetForm = document.getElementById('resetButton');
const submitForm = document.getElementById('submitButton');

const resetFunction = () => {
    document.getElementById('contactForm').reset();
}

const submitFunction = () => {
    alert('This form is not really functional but your message should have been sent by clicking this button.');
}

resetForm.onclick = resetFunction;
submitForm.onclick = submitFunction;


