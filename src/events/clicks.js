/**
 * In the HTML, there is an element with the id "click-me", you need to register
 * a new event listener that will trigger an alert when the element is clicked.
 * The alert text should contain "Button clicked"
 */
export function reactToClickEvent() {
  const clickMe = document.getElementById('click-me');

    clickMe.addEventListener('click', function () {
        alert('Button clicked');
    });
}

/**
 * You should register an event listener on the same button as the last exercise.
 * But this time you should add a new div below the button with the content "clicked"
 */
export function addEventToDomOnClick() {
    const clickMeElement = document.getElementById('click-me');
    clickMeElement.addEventListener('click', function () {

        const newDivElement = document.createElement('div');

        newDivElement.textContent = 'clicked';

        clickMeElement.parentNode.appendChild(newDivElement);

    });

}
