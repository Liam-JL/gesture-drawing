const reader = new FileReader();
const imgSelectionBtn = document.getElementById("img-selection-btn");
const imgInput = document.getElementById("img-input");
const intervalBtns = document.querySelectorAll(".interval-btn");
const controlsContainer = document.getElementById("controls-container")

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

const radios = document.querySelectorAll('input[name="duration"]');
radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    interval = event.target.value
    console.log('Selected duration:', interval, 'seconds');
  });
});
