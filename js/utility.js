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

// function for append a child 
function selectedPlayer(parentDivId, childName) {
    const parentContainer = document.getElementById(parentDivId);
    const li = document.createElement('li');
    li.innerText = childName;
    parentContainer.appendChild(li);
}

//function for button disabled
function buttonDisable(buttonId) {
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = "#A2A9AF";
}

// function for alert More Then top Five
// function alertMoreThen5(totalChildNumber) {
//     if (totalChildNumber > 5) {
//         alert('You are Selected Maximum 5 Players fot Top 5!')
//     }
    
// }