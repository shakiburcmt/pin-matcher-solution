function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('not found 4 digit pin')
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previousNumber = typedNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumber.value = remainingDigits;
        }
    }
    else {
        const previousNumber = typedNumber.value;
        const newTypedNumber = previousNumber + number;
        typedNumber.value = newTypedNumber;

    }
})

document.getElementById('submit').addEventListener('click', function () {
    const displayPinField = document.getElementById('pin-field');
    const currentPin = displayPinField.value;
    const typedNumber = document.getElementById('typed-number');
    const number = typedNumber.value;
    const pinValid = document.getElementById('valid');
    const pinInvalid = document.getElementById('invalid');
    if (currentPin === number) {
        pinValid.style.display = 'block';
        pinInvalid.style.display = 'none';
        typedNumber.value = '';
    }
    else {
        pinInvalid.style.display = 'block';
        pinValid.style.display = 'none';
        typedNumber.value = '';
    }
})