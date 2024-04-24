// clock.js
// Prompt the user for their name and update the welcome message
const userName = prompt("Please enter your name:"); // Get user's name
const welcomeElement = document.getElementById("welcome");
welcomeElement.textContent = `Welcome, ${userName || "User"}!`; // Update welcome message

// Update the digital clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();

    const currentTime = `${hours}:${minutes}:${seconds}`;
    const currentDate = `${month} ${day}, ${year}`;

    document.getElementById("time").textContent = currentTime;
    document.getElementById("date").textContent = currentDate;
}

// Change body background color on button click and toggle clock shape
function toggleClockShape() {
    const container = document.getElementById("container");
    const clock = document.getElementById("clock");

    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generate a random hex color
    document.body.style.backgroundColor = newColor; // Change body background color

    clock.classList.toggle("circle"); // Toggle the clock shape between square and circle
}

// Add event listener to the button
document.getElementById("toggleClockShape").addEventListener("click", toggleClockShape);

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
