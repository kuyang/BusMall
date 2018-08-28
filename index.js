
//Creating objects that will take in parameters
let imageOne = document.getElementById('image1');
let imageTwo = document.getElementById('image2');
let imageThree = document.getElementById('image3');

let busMallArray = [];

let busMall = function(name, filePath){
    this.name = name;
    this.filePath = filePath;
    this.clicked = 0;
    this.shown = 0;
};

//initiate constructor beatsColor
let backpack = new busMall('backpack', './Assets/backpack.jpg');
let sideBag = new busMall('sideBag', './Assets/sideBag.jpg');
let messengerBag = new busMall('messenger bag', './Assets/messenger.jpg');
let beatsBlue = new busMall('Beats blue', './Assets/beatsBlue.jpg');
let beatsPink = new busMall('Beats pink', './Assets/beatsPink.jpg');
let beatsPurple = new busMall('Beats purple', './Assets/beatsPurple.jpg');
let beatsRed = new busMall('Beats red', './Assets/beatsRed.jpg');


//push instances/objects into busMallArray
busMallArray.push(backpack,sideBag,messengerBag,beatsBlue,beatsPink,beatsPurple,beatsRed);
console.log(backpack);
console.log(busMall);

//define a function to ramdomize a number
function randomImage(){
    let randomNumber = Math.floor(Math.random()* busMallArray.length);
    let imageIndex = busMallArray[randomNumber];
    imageIndex.shown += 1;
    return imageIndex;
}
//function to display images

//Declaring 
let firstImage = randomImage();
let secondImage = randomImage();
let thirdImage = randomImage();

imageOne.src = firstImage.filePath;
imageTwo.src = secondImage.filePath;
imageThree.src = thirdImage.filePath;

function imageClicked(){
    firstImage.clicked += 1;
    console.log('first image clicked property', firstImage.clicked);
}
// function imageClickedTwo(){
//     secondImage.clicked += 1;
//     return;
// }
// function imageClickedThree(){
//     thirdImage.clicked += 1;
//     return;
// }

imageOne.addEventListener('click',imageClicked);
// imageTwo.addEventListener('click',imageClickedTwo);
// imageThree.addEventListener('click',imageClickedThree);

console.log('first image shown', firstImage.shown);
console.log('second image shown', secondImage.shown);
console.log('third image shown', thirdImage.shown);