// JavaScript file

// Define an array of aspirations
const aspirations = ["Computer Science Student", "Aspiring Entrepreneur", "Upcoming Developer"];

// Get a reference to the aspiration div element
const aspirationDiv = document.getElementById("aspiration");
console.log(aspirationDiv);

// Set the time (in milliseconds) to display each aspiration
const displayTime = 2000;

// Initialize the index of the current aspiration
let currentIndex = 0;

// Define a function to display the current aspiration and switch to the next one
function displayNextAspiration() {
    // Get the current aspiration
    const currentAspiration = aspirations[currentIndex];

    // Display the current aspiration in the div element
    aspirationDiv.innerText = currentAspiration;

    // Increment the index to switch to the next aspiration
    currentIndex = (currentIndex + 1) % aspirations.length;

    // Wait for the specified time before displaying the next aspiration
    setTimeout(displayNextAspiration, displayTime);
}

// Start the loop to display aspirations
displayNextAspiration();
