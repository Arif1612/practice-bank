function inputField(fieldId) {
    const fieldArea = document.getElementById(fieldId);
    fieldAreaText = fieldArea.value;
    fieldAreaDigit = parseFloat(fieldAreaText);
    fieldArea.value = '';
    return fieldAreaDigit;
}
// Please Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    amount = inputField('deposit-input');
    console.log(amount);

})

// Please Withdraw