//function for Get input value.
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseInt(inputFieldString);
    return inputFieldNumber;
}
//function for Set input value.
function setInputValueById(inputFieldId, newValue) {
    const inputField = document.getElementById(inputFieldId);
    inputField.value = newValue;
}
//function for Get Text inner Element.
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementFieldNumber = parseInt(elementFieldString);
    return elementFieldNumber;
}
//function for Set Text inner Element.
function setTextElementeById(elementId, newValue) {
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue
}
document.getElementById('btn_calculate').addEventListener('click', function () {
    const perPlayerField = getInputValueById('per_player_field');
    const totalPlayerExpese = perPlayerField * 5; //beCareful sayed mia(use total li-tag number)
    setTextElementeById('player_expense_element', totalPlayerExpese) 
})
document.getElementById('btn_calculate_total').addEventListener('click', function () {
    const playerExpence = getElementValueById('player_expense_element');
    const managerExpense = getInputValueById('manager_field');
    const coachExpense = getInputValueById('coach_field');
    // console.log(playerExpence,managerExpense,coachExpense);
    const allTotalExpenses = playerExpence + managerExpense + coachExpense;
    setTextElementeById('total_expense_element', allTotalExpenses)
})
