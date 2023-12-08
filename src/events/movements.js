/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    let coordinatesElement = document.getElementById("mouse-coordinates");

    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const coordinatesText = `x: ${mouseX}, y: ${mouseY}`;

        coordinatesElement.textContent = coordinatesText;
    });
}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
// Get the input element with the ID "focus-me"
const input = document.getElementById("focus-me");

// Store the original border color of the input
let originalColor = input.style.borderColor;

// Function to handle hover, focus, and blur events
export function hoverFocusAndBlur() {
    // Select all labels associated with the input
    const labels = document.querySelectorAll("label[for='focus-me']");

    // Store the original text content of the labels
    const originalLabels = Array.from(labels, (label) => label.textContent);

    // Keep track of used colors to avoid duplicates
    const usedColors = [originalColor];

    // Event listener for mouseout (when not in focus)
    input.addEventListener("mouseout", () => {
        // Check if the input is not in focus
        if (!input.matches(":focus")) {
            // Restore the original text content to labels
            input.labels.forEach((label, i) => {
                label.textContent = originalLabels[i];
            });
        }
    });

    // Event listener for mouseover (when hovered)
    input.addEventListener("mouseover", () => {
        // Update the text content of labels when hovered
        input.labels.forEach((label) => {
            label.textContent = "Yes, you hover me!";
        });
    });

    // Additional event listener for mouseout (when hover is lost)
    input.addEventListener("mouseout", () => {
        // Check if the input is not in focus
        if (!input.matches(":focus")) {
            // Restore the original text content to labels
            input.labels.forEach((label, i) => {
                label.textContent = originalLabels[i];
            });
        }
    });

    // Event listener for focus (when the input is in focus)
    input.addEventListener("focus", () => {
        // Generate a new border color until it's different from the original color
        let newBorderColor;
        do {
            newBorderColor = getRandomColor();
        } while (usedColors.includes(newBorderColor));

        // Update the input border color
        input.style.borderColor = newBorderColor;

        // Store the new color in the used colors array
        usedColors.push(newBorderColor);
    });

    // Event listener for blur (when the input loses focus)
    input.addEventListener("blur", () => {
        // If there is no text inside the input field, reset border color to default
        if (!input.value.trim()) {
            input.style.borderColor = originalColor;
        }
    });
}

// Function to generate a random RGB color
function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return `rgb(${x},${y},${z})`;
}




/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    const input = document.getElementById("focus-me");

    input.addEventListener("input", () => {
        // Generate a new random color for each input event
        const newColor = getRandomColor();

        // Change the originalColor variable with the new color
        originalColor = newColor;

        // Change the border color of the input element to the new color
        input.style.borderColor = newColor;

        // Change the text color of associated labels to the new color
        const labels = document.querySelectorAll(`label[for='${input.id}']`);
        labels.forEach((label) => {
            label.style.color = newColor;
        });
    });

    input.addEventListener("blur", () => {
        // If there is no text inside the input field, reset border color to default
        if (!input.value.trim()) {
            input.style.borderColor = originalColor;
        }
    });
}










