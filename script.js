const selectImagesBtn = document.getElementById("select-images-btn");
const fileInput = document.getElementById('fileInput');
const currentImg = document.getElementById('current-img')
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const reader = new FileReader();

let currentImgCounter = 0;
let files = [];

//Open file dialog when button is clicked
selectImagesBtn.addEventListener('click', () => {
    fileInput.click();
});

//Handle file input change
fileInput.addEventListener('change', () => {
    userImages = Array.from(fileInput.files);
    if (userImages.length > 0) {
        //Read the first image as Data URL
        reader.readAsDataURL(userImages[currentImgCounter])
    }
})
    
nextBtn.addEventListener('click', () => {
    if (currentImgCounter < userImages.length - 1) {
        currentImgCounter ++;
        reader.readAsDataURL(userImages[currentImgCounter]);
    }
})

prevBtn.addEventListener('click', () => {
    if (currentImgCounter > 0) {
        currentImgCounter --;
        reader.readAsDataURL(userImages[currentImgCounter]);
    }
})
    
//When the file is loaded, set the file as source for CurrentImg so it displays in app
reader.addEventListener('load', () => {
    currentImg.src = reader.result;
})

//TODO Add little graphic at the bottom that has little squares representing how many images user has loaded in and a highlight round the current one 
