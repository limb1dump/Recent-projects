const calcOutput = document.querySelector('.calc__input-result');
const calcBody = document.querySelector('.calc__body');
const plusMinusButton = document.querySelector('.calc__button_plus-min');

const sound = document.querySelector('.sound-beep');
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');

const operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['+', '-', '/', 'x', '√', '%'];
const calculationArr = [];

let listner = false; // prevent's operator to wrok 2 times in a row
let equalListner = false; // make equal button work only after operands
let equalExeListner = false; // changes calculation after equal button has being pressed. Also prevents operands to work after equal button has beign pressed
let dotListner = false; // prevent's dot to be pressed more than 1 time
let soundCheck = true;//sound toggle


// callback function that checks if pressed button is operand
const checkIfButtonIsNumber = (elem) => {
    return elem === event.target.innerText;
}


// callback function that checks if pressed button is operator
const checkIfButtonIsOperator = (elem) => {
    return elem === event.target.innerText;
}


// operands output
const outputOperand = (event) => {
    // to avoid accident clicking on 'calc__body' or 'calc__row'
    if (!event.target.closest('.calc__button')) return;

    //check if pressed button is operand
    if (operands.some(checkIfButtonIsNumber)) {
        if (listner === false) {
            calcOutput.value = '';
            listner = true;
            equalListner = true;
        };

        if (calcOutput.value.length > 13 || equalExeListner) {
            return;
        };

        if (calcOutput.value === '0') {
            calcOutput.value = '';
        };

        // prevent's dot to be pressed more than 1 time
        if (dotListner && event.target.innerText === '.') {
            return;
        };

        if (event.target.innerText === '.') {
            dotListner = true;
        };

        // numbers and dot display output
        calcOutput.value = calcOutput.value + event.target.innerText;
    };

    return;
}


// clear display and array with C button
const clearAll = (event) => {
    if (event.target.innerText === 'C') {
        calcOutput.value = '0';
        calculationArr.length = 0;
        listner = false;
        equalListner = false;
        equalExeListner = false;
        dotListner = false;
        return;
    };
}


// changing array so it's always has 3 states: [], ['first operand', 'operator'], ['first operand', 'operator', 'second operand', 'new operator'],
const pushAndChangeArr = () => {
    calculationArr.push(calcOutput.value);
    calculationArr[1] = event.target.innerText;
}

const pushOnlyArr = () => {
    calculationArr.push(calcOutput.value);
}

const changeArray = (result) => {
    const result2 = Math.round(result * 1000) / 1000;
    if (result2.toString().length > 13) {
        calcOutput.value = result2.toExponential(10);
        calculationArr.splice(0, 1);
        calculationArr.splice(1, 1);
        calculationArr.unshift(result);
        return;
    };

    calcOutput.value = result2;
    calculationArr.splice(0, 1);
    calculationArr.splice(1, 1);
    calculationArr.unshift(result2); // result become first operand
    return;
}


// calculations
const doMath = () => {
    if (calculationArr[1] === '+') {
        const result = Number(calculationArr[0]) + Number(calculationArr[2]);
        changeArray(result);
        return;
    }

    if (calculationArr[1] === '-') {
        const result = Number(calculationArr[0]) - Number(calculationArr[2]);
        changeArray(result);
        return;
    }

    if (calculationArr[1] === '/') {
        const result = Number(calculationArr[0]) / Number(calculationArr[2]);
        changeArray(result);
        return;
    }

    if (calculationArr[1] === 'x') {
        const result = Number(calculationArr[0]) * Number(calculationArr[2]);
        changeArray(result);
        return;
    }

    if (calculationArr[1] === '√') {
        const result = Math.sqrt(Number(calculationArr[0]));
        changeArray(result);
        return;
    }

    if (calculationArr[1] === '%') {
        const result = Number(calculationArr[0]) % Number(calculationArr[2]);
        changeArray(result);
        return;
    }

}


// '+/-' button add and remove
const addRemoveMinus = (event) => {
    if (event.target.innerText === '+/-') {
        calcOutput.value = -calcOutput.value;
    };
}


// runs calculations without pressing equal button
const executeCalculations = (event) => {
    if (operators.some(checkIfButtonIsOperator) && listner) {
        dotListner = false;

        if (event.target.innerText === '√') {
            pushOnlyArr();
            calculationArr[1] = '0';
            const result = Math.sqrt(Number(calculationArr[0]));
            calcOutput.value = Math.round(result * 1000) / 1000;
            calculationArr.length = 0;
            calculationArr.push(result);
            calculationArr[1] = '0';
            equalExeListner = true;
            return;
        };


        if (calculationArr.length === 0) {
            pushAndChangeArr();
            listner = false;
            equalListner = false;
            return;
        };

        if (calculationArr.length === 2 && equalExeListner) {
            calculationArr[1] = event.target.innerText;
            listner = false;
            equalListner = false;
            equalExeListner = false;
            return;
        };

        if (calculationArr.length === 2) {
            pushOnlyArr();
            doMath();
            calculationArr[1] = event.target.innerText;
            equalListner = false;
            listner = false;
            return;
        };
    };
}


// runs calculations with equal button
const showResultWithButtonEqual = (event) => {
    if (event.target.innerText === '=' && equalListner && calculationArr.length === 2) {
        calculationArr.push(calcOutput.value);
        doMath();
        equalListner = false;
        equalExeListner = true;
        return;
    };
}


// events
calcBody.addEventListener('click', executeCalculations);
calcBody.addEventListener('click', showResultWithButtonEqual);
calcBody.addEventListener('click', outputOperand);
calcBody.addEventListener('click', clearAll);
plusMinusButton.addEventListener('click', addRemoveMinus);


// sound events
soundOn.addEventListener('click', function () {
    soundCheck = !soundCheck;
    soundOff.classList.toggle('on');
    soundOn.classList.toggle('on');

})

soundOff.addEventListener('click', function () {
    soundCheck = !soundCheck;
    soundOff.classList.toggle('on');
    soundOn.classList.toggle('on');

})

calcBody.addEventListener('mousedown', function () {
    if (soundCheck) {
        sound.play();
    };
})