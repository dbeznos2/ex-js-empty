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
export function hoverFocusAndBlur() {
    const inputElement = document.getElementById("focus-me");
    const labelElement = document.querySelector('label[for="focus-me"]');
    let originalBorderColor; // Store the original border color
    let usedColors = []; // Keep track of used colors

    // Hover behavior
    inputElement.addEventListener("mouseover", () => {
        labelElement.textContent = "Yes, you hover me!";
    });

    inputElement.addEventListener("mouseout", () => {
        labelElement.textContent = "";
    });

    // Focus behavior
    inputElement.addEventListener("focus", () => {
        // Introduce a slight delay before changing the border color
        setTimeout(() => {
            // Generate a random color different from the original and previously used colors
            const randomColor = generateRandomColor();
            originalBorderColor = inputElement.style.borderColor; // Store the original color
            inputElement.style.borderColor = randomColor;
            usedColors.push(randomColor);
        }, 100); // Adjust the delay as needed
    });

    // Blur behavior
    inputElement.addEventListener("blur", () => {
        // Reset the border color to the original one
        inputElement.style.borderColor = originalBorderColor;
    });

    // Function to generate a random color
    function generateRandomColor() {
        let color;
        do {
            color = getRandomColor();
        } while (usedColors.includes(color) || color === originalBorderColor);
        return color;
    }

    // Function to generate a random hexadecimal color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
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
   
}


