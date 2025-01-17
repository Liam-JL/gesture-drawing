const selectImagesBtn = document.getElementById("select-images-btn");
const fileInput = document.getElementById('fileInput');
const currentImg = document.getElementById('current-img')

selectImagesBtn.addEventListener('click', () => {
    fileInput.click();
})

fileInput.addEventListener('change', () => {
   const files = fileInput.files;
   if (files) {
    const reader = new FileReader();
    reader.onload = (event) => {
        currentImg.src = event.target.result;
    };

    reader.readAsDataURL(files[0])

   }
})


