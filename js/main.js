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
    let targetAreaText = document.getElementById('quoteText');
    switch(randomNumber) {
        case 0:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = '"It is what it is!"';
            document.getElementById('quoteButton').disabled = true;
            document.getElementById('fortuneButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('quoteButton').disabled = false;
                document.getElementById('fortuneButton').disabled = false;
            }, (3 * 1000));
            break;
        case 1:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = '"You get what you deserve!"';
            document.getElementById('quoteButton').disabled = true;
            document.getElementById('fortuneButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('quoteButton').disabled = false;
                document.getElementById('fortuneButton').disabled = false;
            }, (3 * 1000));
            break;
        case 2:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = '"People like booze!"';
            document.getElementById('quoteButton').disabled = true;
            document.getElementById('fortuneButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('quoteButton').disabled = false;
                document.getElementById('fortuneButton').disabled = false;
            }, (3 * 1000));
            break;
    }
}

/* PROJECT 1 - FORTUNE */

if (document.body.contains(document.getElementById('resultArea'))) {
    
    const tellFortune = (event) => {
    let randomNumber = Math.floor(Math.random() * 3);
    let targetArea = document.getElementById('resultArea');
    let targetAreaText = document.getElementById('quoteText');
    switch(randomNumber) {
        case 0:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = 'You might meet someone in the coming days or you might not...';
            document.getElementById('fortuneButton').disabled = true;
            document.getElementById('quoteButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('fortuneButton').disabled = false;
                document.getElementById('quoteButton').disabled = false;
            }, (3 * 1000));
            break;
        case 1:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = 'You might get rich someday or you might not...';
            document.getElementById('fortuneButton').disabled = true;
            document.getElementById('quoteButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('fortuneButton').disabled = false;
                document.getElementById('quoteButton').disabled = false;
            }, (3 * 1000));
            break;
        case 2:
            targetArea.style.display = 'block';
            targetAreaText.innerHTML = 'You might live up to 150 years old or you might not...';
            document.getElementById('fortuneButton').disabled = true;
            document.getElementById('quoteButton').disabled = true;
            setTimeout(function() {
                targetArea.style.display = 'none';
                targetAreaText.innerHTML = '';
                document.getElementById('fortuneButton').disabled = false;
                document.getElementById('quoteButton').disabled = false;
            }, (4 * 1000));
            break;
        }
    }

    document.getElementById('quoteButton').onclick = offerQuote;
    document.getElementById('fortuneButton').onclick = tellFortune;
}


/* PROJECT 2 - CALCULATOR */

if (document.body.contains(document.getElementById('calcOuterContainer'))) {

    let outputArray = [];

    const addButtonValueToArray = (event) => {
        outputArray.push(document.getElementsByClassName('calcNumOperatorBtn').value);
        document.getElementById('calcOutputField2').value = 'testing';
    }

    const clearOutput = (event) => {
        document.getElementById('calcOutputField1').value = '';
        document.getElementById('calcOutputField2').value = '';
    }

    document.getElementsByClassName('calcNumOperatorBtn').onclick = addButtonValueToArray;
    document.getElementById('calcBtnClear').onclick = clearOutput;
}