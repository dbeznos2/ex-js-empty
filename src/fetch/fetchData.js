/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
    const button = document.getElementById("click-to-fetch");
    const displayHere = document.getElementById("display-here");

    button.addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.github.com/octocat");

            // Read the response body as text
            const rawResponse = await response.text();

            // Log the raw response content to the console
            console.log("Raw Response:", rawResponse);

            if (response.ok) {
                displayHere.textContent = rawResponse;
            } else {
                displayHere.textContent = `Error: ${response.status} - ${response.statusText}`;
            }
        } catch (error) {
            displayHere.textContent = `Error: ${error.message}`;
        }
    });
}






