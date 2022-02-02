const images = ["0.jpg", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;
bgimage.width = 1000;
bgimage.height = 1500;

document.body.appendChild(bgimage);