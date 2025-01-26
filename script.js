const reader = new FileReader();
const imgSelectionBtn = document.getElementById("img-selection-btn");
const imgInput = document.getElementById("img-input");
const controlsContainer = document.getElementById("controls-container");
const radios = document.querySelectorAll('input[name="duration"]');
const customIntervalBtn = document.getElementById("custom-interval-btn");
const customInput = document.getElementById("custom-input")


let currentImgCounter = 0;
let userImages = [];
let interval = 0;

controlsContainer.style.display = "none";

//Open file dialog when button is clicked
imgSelectionBtn.addEventListener('click', () => {
    imgInput.click();
});

//Handle file input change
imgInput.addEventListener('change', () => {
    userImages = Array.from(fileInput.files);
    if (userImages.length > 0) {
        //Read the first image as Data URL
        reader.readAsDataURL(imgSelectionBtn[currentImgCounter])
    }
})

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