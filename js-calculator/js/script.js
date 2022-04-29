const calcResult = document.querySelector('.calc__input-result');
const calcBody = document.querySelector('.calc__body');




// GLOBAL ==========================================================

let plusListner = false;
let equalPlusListner = false;

let myltiplyListner = false;
let equalMyltiplyListner = false;

let numListner = false;

const arr = [];





// CHECK FUNCTION ======================================================

const checkListners = () => {
    calcResult.value = '';
    plusListner = false;
    numListner = false;
    myltiplyListner = false;
}


// BUTTONS VALUE =======================================================

const addValueButton1 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '1';
}

const addValueButton2 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '2';
}

const addValueButton3 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '3';
}

const addValueButton4 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '4';
}

const addValueButton5 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '5';
}

const addValueButton6 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '6';
}

const addValueButton7 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '7';
}

const addValueButton8 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '8';
}

const addValueButton9 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '9';
}

const addValueButton0 = () => {
    if (calcResult.value.length > 16) {
        return
    }

    if (plusListner || myltiplyListner) {
        checkListners();
    }

    calcResult.value = calcResult.value + '0';
}






const removeValue = () => {
    calcResult.value = '';
}

const showResult = (result) => {
    calcResult.value = result;
}

const removeValueC = () => {
    calcResult.value = '';
    arr.length = 0;
}

// CALCULATION FUNCTIONS =======================================================

const doSumm = () => {
    const result = Number(arr[0]) + Number(arr[1]);
    arr.length = 0;
    arr.push(result);
}

const doMultiply = () => {
    const result = Number(arr[0]) * Number(arr[1]);
    arr.length = 0;
    arr.push(result);
}




// SUMM FUNCTIONS =======================================================



const addFunc = (value) => {
    plusListner = true;
    equalPlusListner = true;

    if (numListner) {
        return
    }

    if (arr.length === 0) {
        arr.push(value);
        return
    }

    if (equalMyltiplyListner) {
        arr.push(value);
        doMultiply();
        showResult(arr[0]);
        numListner = true;
        equalMyltiplyListner = false;
        return
    }

    if (arr.length === 1) {
        arr.push(value);
        doSumm();
        showResult(arr[0]);
        numListner = true;
        return
    }
}

const equalFunc = (value) => {

    if (numListner) {
        return
    }

    if (plusListner === false && arr.length === 1) {
        arr.push(value);
        doSumm();
        showResult(arr[0]);
        numListner = true;
        plusListner = true;
        equalPlusListner = false;
        return
    }
}


// MULTIPLY FUNCTIONS ===============================================

const multiplyFunc = (value) => {
    myltiplyListner = true;
    equalMyltiplyListner = true;

    if (numListner) {
        return
    }

    if (arr.length === 0) {
        arr.push(value);
        return
    }

    if (equalPlusListner) {
        arr.push(value);
        doSumm();
        showResult(arr[0]);
        numListner = true;
        equalPlusListner = false;
        return
    }

    if (arr.length === 1) {
        arr.push(value);
        doMultiply();
        showResult(arr[0]);
        numListner = true;
        return
    }
}

const equalMultiplyFunc = (value) => {

    if (numListner) {
        return
    }

    if (myltiplyListner === false && arr.length === 1) {
        arr.push(value);
        doMultiply();
        showResult(arr[0]);
        numListner = true;
        myltiplyListner = true;
        equalMyltiplyListner = false;
        return
    }
}




// EVENTS ===========================================================

calcBody.addEventListener('click', event => {
    if (event.target.closest('.calc__button_1')) {
        addValueButton1();
    }

    if (event.target.closest('.calc__button_2')) {
        addValueButton2();
    }

    if (event.target.closest('.calc__button_3')) {
        addValueButton3();
    }

    if (event.target.closest('.calc__button_4')) {
        addValueButton4();
    }

    if (event.target.closest('.calc__button_5')) {
        addValueButton5();
    }

    if (event.target.closest('.calc__button_6')) {
        addValueButton6();
    }

    if (event.target.closest('.calc__button_7')) {
        addValueButton7();
    }

    if (event.target.closest('.calc__button_8')) {
        addValueButton8();
    }

    if (event.target.closest('.calc__button_9')) {
        addValueButton9();
    }

    if (event.target.closest('.calc__button_0')) {
        addValueButton0();
    }

    if (event.target.closest('.calc__button_c')) {
        removeValueC();
    }

    if (event.target.closest('.calc__button_plus')) {
        addFunc(calcResult.value)

    }

    if (event.target.closest('.calc__button_x')) {
        multiplyFunc(calcResult.value);
    }


    // EQUAL BUTTON FUNCTIONS ============================================
    if (event.target.closest('.calc__button_equal')) {

        if (equalPlusListner) {
            equalFunc(calcResult.value)
        }

        if (equalMyltiplyListner) {
            equalMultiplyFunc(calcResult.value)
        }

    }
})


