const canvas = document.getElementById('roseCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a rose
function drawRose(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 5, y - 20, x + 10, y - 20, x + 15, y);
    ctx.bezierCurveTo(x + 20, y + 20, x + 10, y + 40, x, y + 60);
    ctx.bezierCurveTo(x - 10, y + 40, x - 20, y + 20, x - 15, y);
    ctx.bezierCurveTo(x - 10, y - 20, x - 5, y - 20, x, y);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

// Function to get a random color in shades of pink and red
function getRandomColor() {
    const shades = ['#FF69B4', '#FF1493', '#DC143C', '#FFC0CB', '#FFB6C1'];
    return shades[Math.floor(Math.random() * shades.length)];
}

// Function to fill the canvas with roses
function fillCanvasWithRoses() {
    const numRoses = 100; // Adjust the number of roses as needed

    for (let i = 0; i < numRoses; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        drawRose(x, y);
    }
}

// Event listener to redraw roses when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fillCanvasWithRoses();
});

// Initial fill of roses
fillCanvasWithRoses();
