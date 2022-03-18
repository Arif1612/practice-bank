function inputField(fieldId) {
    const fieldArea = document.getElementById(fieldId);
    fieldAreaText = fieldArea.value;
    fieldAreaDigit = parseFloat(fieldAreaText);
    fieldArea.value = '';
    return fieldAreaDigit;
}
// updateBalance
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const previousBalanceText = balanceTag.innerText;
    const previousBalanceInDigit = parseFloat(previousBalanceText);

    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalanceInDigit + amount;
    }
    else {
        newBalance = previousBalanceInDigit - amount;
    }
    balanceTag.innerText = newBalance;



}

//  updateTotal 
function updateTotal(depositId, amount) {
    const previousField = document.getElementById(depositId);
    previousFieldText = previousField.innerText;
    previousFieldDigit = parseFloat(previousFieldText);
    upadeFieldDigit = previousFieldDigit + amount;
    previousField.innerText = upadeFieldDigit;
}
// Please Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = inputField('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);

})

// Please Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = inputField('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);



})