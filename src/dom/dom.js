/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  var text= document.getElementById('change-my-color');
  text.style.color = 'red';
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  var divElement = document.getElementById('add-your-elements-in-this-element');

  var paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Bonjour';

  var paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Toto';

  divElement.appendChild(paragraph1);
  divElement.appendChild(paragraph2);
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  var divElement = document.getElementById('add-list-here');

  var ulElement = document.createElement('ul');

  listElements.forEach(element => {

    var liElement = document.createElement('li');

    liElement.textContent = element.name;

    liElement.style.backgroundColor = element.color;

    ulElement.appendChild(liElement);
  });

  divElement.appendChild(ulElement);
}
