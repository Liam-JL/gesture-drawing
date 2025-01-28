//Settings container element
const settingsContainer = document.getElementById("settings-container")
//Image selection elements
const imgSelectionContainer = document.getElementById("img-selection-container");
const imgSelectionBtn = document.getElementById("img-selection-btn");
const imgInput = document.getElementById("img-input");
const imgPreviews = document.getElementById("img-previews");

//Interval selection elements
const intervalsContainer = document.getElementById("intervals-container")
const radios = document.querySelectorAll('input[name="duration"]');
const customIntervalBtn = document.getElementById("custom-interval-btn");
const customInput = document.getElementById("custom-input");

//Start button element
const submitContainer = document.getElementById("submit-container");
const startBtn = document.getElementById("start-btn");

//Main display elements
const displayContainer = document.getElementById("display-container");
const currentImg = document.getElementById("current-img");
const displayControls = document.getElementById("display-controls");
const previousBtn = document.getElementById("previous-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");

let files = []
let interval = 0;


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



startBtn.addEventListener("click", () => {
  if (files.length > 0 && interval > 0) {
    //Hide everything and display main work area and controls
    settingsContainer.style.display = "none";
    displayContainer.style.display = "flex";

    //Load first image
    newSrc = imgPreviews.children[0].src;
    currentImg.src = newSrc;

    //Change image on correct interval, run function for how many images there are
    function changeImages() {
      let currentImgCounter = 0;
      const id = setInterval(nextImg, interval * 1000);
      function nextImg() {
        console.log(currentImgCounter, imgPreviews.children.length - 1);
        if (currentImgCounter >= imgPreviews.children.length - 1) {
          clearInterval(id);
          currentImg.src = "Images/1000_F_122939679_d0EwmFrZpa2u6hyWvwU8TiANPvqUhTCA.jpg"
        } else {
          currentImgCounter ++;
          currentImg.src = imgPreviews.children[currentImgCounter].src;
        }
      }
    }

    changeImages()


  } else {
    alert("Select files and interval length")
    }
  })

