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

//function for Get Element String by id
function getElementStringById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    return elementFieldString;
}

// function for append a child and disable this button!
function selectedPlayer(parentDivId, childName, disabledBtnId) {
    let totalChildNumber = document.getElementById('selected_container').childElementCount;
    if (totalChildNumber === 5) {
        alert('You are Selected maximum 5 players for top 5 !');
    }
    else{
        const parentContainer = document.getElementById(parentDivId);
        const li = document.createElement('li');
        li.innerText = childName;
        parentContainer.appendChild(li);

        document.getElementById(disabledBtnId).disabled = true;
        document.getElementById(disabledBtnId).style.backgroundColor = "#A2A9AF";
   }
}



