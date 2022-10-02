// clickHandler for Calculate Player Expenses button
document.getElementById('btn_calculate').addEventListener('click', function () {
    let totalChildNumber = document.getElementById('selected_container').childElementCount;
    const perPlayerField = getInputValueById('per_player_field');

    if (isNaN(perPlayerField)) {
        alert('Please provide a Valid Number!')
        return;
    }

    const totalPlayerExpese = perPlayerField * totalChildNumber;
    setTextElementeById('player_expense_element', totalPlayerExpese);
})

// clickHandler for  Calculate All Total Expenses button
document.getElementById('btn_calculate_total').addEventListener('click', function () {
    const playerExpence = getElementValueById('player_expense_element');
    const managerExpense = getInputValueById('manager_field');
    const coachExpense = getInputValueById('coach_field');

    if (isNaN(managerExpense || coachExpense)) {
        alert('Please provide a Valid Number!')
        return;
    }

    const allTotalExpenses = playerExpence + managerExpense + coachExpense;
    setTextElementeById('total_expense_element', allTotalExpenses)
})

