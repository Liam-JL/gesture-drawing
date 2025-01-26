const imgSelectionBtn = document.getElementById("img-selection-btn");
const imgInput = document.getElementById("img-input");
const imgPreviews = document.getElementById("img-previews");


const controlsContainer = document.getElementById("controls-container");
const radios = document.querySelectorAll('input[name="duration"]');
const customIntervalBtn = document.getElementById("custom-interval-btn");
const customInput = document.getElementById("custom-input")


let currentImgCounter = 0;
let files = []
let userImages = [];
let interval = 0;

controlsContainer.style.display = "none";

//Open file dialog when button is clicked
imgSelectionBtn.addEventListener('click', () => {
    imgInput.click();
});

imgInput.addEventListener('change', () => {
    files = Array.from(imgInput.files); // Get selected files
    if (files.length > 0) {
      imgPreviews.innerHTML = ""; // Clear previous thumbnails
  
      files.forEach((file, i) => {
        const reader = new FileReader(); // Create a new FileReader for each file
        
        reader.onload = (event) => {
          const thumbnail = document.createElement("img"); // Create a thumbnail <img>
          thumbnail.classList.add("thumbnail");
          thumbnail.setAttribute("id", `img-${i}`);
          thumbnail.src = event.target.result; // Set the base64 image data as the src
          imgPreviews.appendChild(thumbnail); // Add the thumbnail to the previews container
        };
        
        reader.readAsDataURL(file); // Read the file as a data URL
      });
    }
  });

radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    if (event.target.id === "custom-interval-btn") {
        customInput.focus()
        
        if (customInput.value < 5) {
            customInput.value = 5;
        }

        interval = customInput.value;

    } else {
        interval = event.target.value
    }
    console.log('Selected duration:', interval, 'seconds'); 
    });
});

customInput.addEventListener("input", () => {
    interval = customInput.value;
    console.log('Selected duration set to custom interval:', interval, 'seconds');

    customIntervalBtn.checked = true;
  })