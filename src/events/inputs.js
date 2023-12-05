/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    let textAlert = document.getElementById('write-some-text');
    if (textAlert) {
        textAlert.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const inputValue = textAlert.value.trim();
                if (inputValue !== '') {
                    alert(inputValue);
                }
            }
        });
    }
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    let listInput = document.getElementById('list-input');
    let list = document.getElementById('list');

    if (listInput && list) {
        listInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                addElementToList();
            }
        });

        listInput.addEventListener('blur', function () {
            addElementToList();
        });
    }

    function addElementToList() {
        let inputValue = listInput.value.trim();

        if (inputValue !== '') {
            // Create a new list item
            let listItem = document.createElement('li');
            listItem.textContent = inputValue;

            // Append the new item to the list
            list.appendChild(listItem);

            // Clear the input field
            listInput.value = '';
        }
    }
}


/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    let list = document.getElementById('list');

    if (list) {
        // Attach the event listener to the list and use event delegation
        list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                // If a list item is clicked, remove it
                event.target.remove();
            }
        });
    } else {
        console.error('List element not found.');
    }
}

