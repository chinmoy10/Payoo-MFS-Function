function getInputFieldValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueByID(id){
    const inputTextValue = document.getElementById(id).innerText;
    const inputNumberValue = parseFloat(inputTextValue);
    return inputNumberValue;
}

function showSectionId(id){
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history-list').classList.add('hidden');

    // show the that which is call by switch

    document.getElementById(id).classList.remove('hidden');
}