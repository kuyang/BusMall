let busMallArray = [];

let elImageContainer = document.getElementById('imageContainer');

//
let BusMall = function(name, filePath, id){
    this.name = name;
    //will stantiate the property
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown= 0;
};

// BusMall.allProducts = [];
// BusMall.activeSet = [];
// BusMall.Mall.lastDisplayed = [];
// BusMall.totalClicked = 30;

//Creating objects that will take in parameters
// let imageOne = document.getElementById('image1');
// let imageTwo = document.getElementById('image2');
// let imageThree = document.getElementById('image3');
// //defining arrays
// let votes = [];
// let names = [];



//initiate constructor beatsColor creating a new instance and asensuating the constuctor and passing arguments to become new proprty
// if (localStorage.length > 0){
//     let getData = localStorage.getItem('storageBusMallArray');
//     busMallArray = JSON.parse(getData);
// }else {

if(localStorage.length > 0){
    let getData = localStorage.getItem('BusMallStorage');
    busMallArray = JSON.parse(getData);
    }else{

    let backpack = new BusMall('backpack', './Assets/backpack.jpg', 'Back Pack');
    let sideBag = new BusMall('sideBag', './Assets/sideBag.jpg', 'Side Bag');
    let messengerBag = new BusMall('messenger bag', './Assets/messenger.jpg', 'bag');
    let beatsBlue = new BusMall('Beats blue', './Assets/beatsBlue.jpg', 'blue');
    let beatsPink = new BusMall('Beats pink', './Assets/beatsPink.jpg','pink');
    let beatsPurple = new BusMall('Beats purple', './Assets/beatsPurple.jpg','purple');
    let beatsRed = new BusMall('Beats red', './Assets/beatsRed.jpg','red');
    busMallArray.push(backpack,sideBag,messengerBag,beatsBlue,beatsPink,beatsPurple,beatsRed);
}



//push instances/objects into busMallArray
// console.log(backpack);
// console.log(BusMall);

//define a function to ramdomize a number
function randomImage(){
    let randomNumber = Math.floor(Math.random()* busMallArray.length);
    let imageIndex = busMallArray[randomNumber];
    // imageIndex.showMe += 1; imageIndex is an objet
    //returning the imageIndex object
    return imageIndex;
};
//function to display images

//Declaring 
let firstImage;
let secondImage;
let thirdImage;

//     //update images
//     imageOne.src = BusMall.allProducts[firstImage].filePath;
//     imageTwo.src = BusMall.allProducts[secondImage].filePath;
//     imageThree.src = BusMall.allProducts[thirdImage].filePath;
//     //increments view for all images
//     BusMall.allProducts[firstImage].showMe++;
//     BusMall.allProducts[secondImage].showMe++;
//     BusMall.allProducts[thirdImage].showMe++;

//     BusMall.lastDisplayed[0] = firstImage;
//     BusMall.lastDisplayed[1] = secondImage;
//     BusMall.lastDisplayed[2] = thirdImage;
// }

// randomImage();



function displayImages(){
    elImageContainer.innerHTML = '';
    for(let i=0; i<3; i++){
        let imageObject = randomImage();
        if(i === 0){
            firstImage = imageObject;
        }else if(i === 1){
            while(imageObject.id === firstImage.id){
                imageObject = randomImage();
            }
            secondImage = imageObject;
        }else {
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id){
                imageObject = randomImage();
            }
            thirdImage = imageObject
        }
        let elImage = document.createElement('img');
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        imageObject.shown += 1;
    }
}

//function expression to run function
displayImages();

//define event listener that will increment the times clicked. 
function imageClicked(event){
    if(event.target.id === firstImage.id){
        firstImage.clicked += 1;
    }else if(event.target.id === secondImage.id){
        secondImage.clicked += 1;
    }else if(event.target.id === thirdImage.id){
        thirdImage.clicked += 1;
    }
    displayImages();
    //save our data to local storage to be called. 
    //localStorage.setItem('storageBusMallArray', JSON.stringify(busMallArray));
    localStorage.setItem('BusMallStorage', JSON.stringify(busMallArray));
    DisplyChart();
};

//saving our object info
// localStorage.setItem('storageBusMallArray', JSON.stringify(busMallArray));
// busMallArray = JSON.parse(localStorage.storageBusMallArray);

