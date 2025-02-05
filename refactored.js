class Model {
    constructor() {
        this.listeners = [];
        this._imgFiles = [];
        this.userInterval = 0; 
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    updateListeners() {
        this.listeners.forEach(listener => listener(this.imgFiles));
    }

    get imgFiles() {
        return this._imgFiles;
    }

    set imgFiles(files) {
        this._imgFiles = files;
        this.updateListeners();
    }
}

class View {
    constructor() {
        //Cache elements
        //Settings Section
        //Image Select Section
        this.chooseImagesBtn = document.getElementById("chooseImagesBtn");
        this.imagesFileInput = document.getElementById("imagesFileInput");
        this.imagePreviewsContainer = document.getElementById("imagePreviewsContainer");

    }

    //UI Update methods
    renderImgPreviews(files) {
        console.log("renderImgPreviews called");
    
        if (files.length === 0) return console.log("No files selected");
    
        this.clearPreviews(); // Clears old previews
    
        files.forEach(file => this.createImagePreview(file));
    }
    
    // Clears the preview container
    clearPreviews() {
        this.imagePreviewsContainer.innerHTML = '';
    }
    
    // Creates and appends an image preview
    createImagePreview(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement("img");
            img.classList.add("img-preview");
            img.src = event.target.result;
            this.imagePreviewsContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }


    //Bind element methods
    bindChooseImagesBtn(handler){
        this.chooseImagesBtn.addEventListener("click", handler)
    }

    bindImagesFileInput(handler){
        this.imagesFileInput.addEventListener("change", handler)
    }

}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        //Bind UI events
        this.view.bindChooseImagesBtn(this.handleChooseImagesBtn.bind(this));

        this.view.bindImagesFileInput(this.handleImagesFileInput.bind(this));

        //Add listeners
        this.model.addListener(this.view.renderImgPreviews.bind(this.view));
    }

    //Controller methods
    handleChooseImagesBtn() {
        console.log("choose images button clicked");
        //Click imagesFileInput to fire off file selection
        this.view.imagesFileInput.click();
    }

    handleImagesFileInput() {
        //Set files from ImagesFileInput into model
        this.model.imgFiles = Array.from(this.view.imagesFileInput.files); 
        console.log("render images")
    }

}

const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);