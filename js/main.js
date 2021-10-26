/* FORM FUNCTIONS */

if (document.body.contains(document.getElementById('contactForm'))) {
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
}



/* SCROLL TO TOP BUTTON */

const backToTop = (event) => {
    if (window.pageYOffset > 100) {
        document.getElementById('scrollTop').style.display = 'block';
    } else {
        document.getElementById('scrollTop').style.display = 'none';
    }
}

window.onscroll = backToTop;



/* PROJECT 1 - QUOTE */

const offerQuote = (event) => {
    let randomNumber = Math.floor(Math.random() * 3);
    let targetArea = document.getElementById('resultArea');
    switch(randomNumber) {
        case 0:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = '<p class="quoteText">It is what it is!</p>';
            break;
        case 1:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = '<p class="quoteText">You get what you deserve!</p>';
            break;
        case 2:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = '<p class="quoteText">People like booze!</p>';
            break;
    }
}

document.getElementById('quoteButton').onclick = offerQuote;
