// Get the canvas element
const canvas = document.getElementById('sprite-canvas');
const ctx = canvas.getContext('2d');

// Create an Image object to load the sprite sheet
const spriteSheet = new Image();

// Set the source of the sprite sheet image
spriteSheet.src = 'sprite.png';
// Define the size of each sprite in the sheet
const spriteWidth = 399; // Width of each sprite frame (rounded to the nearest whole number)
const spriteHeight = 216; // Height of each sprite frame (rounded to the nearest whole number)

// Wait for the sprite sheet image to load
spriteSheet.onload = function() {
  const framesPerRow = 3; // Number of frames per row in the sprite sheet
  const framesPerColumn = 12; // Number of frames per column in the sprite sheet
  const totalFrames = framesPerColumn; // Total number of frames in the last column

  let frameIndex = 0; // Current sprite index
  let animationSpeed = 200; // Time (in milliseconds) between each frame
  let lastTime = 0; // Time of the last frame

  function animate(currentTime) {
    // Calculate the time elapsed since the last frame
    const deltaTime = currentTime - lastTime;

    // Only update and draw a new frame if enough time has passed
    if (deltaTime >= animationSpeed) {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the position of the sprite in the sprite sheet
      const spriteX = (framesPerRow - 1) * spriteWidth; // Last column
      const spriteY = frameIndex * spriteHeight;

      // Draw the sprite onto the canvas
      ctx.drawImage(spriteSheet, spriteX, spriteY, spriteWidth, spriteHeight, 50, 50, spriteWidth, spriteHeight);

      // Update the frame index for the next frame
      frameIndex = (frameIndex + 1) % totalFrames;

      // Update the last frame time
      lastTime = currentTime;
    }

    // Request the next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation
  requestAnimationFrame(animate);
};
