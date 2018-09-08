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

TotalClicked = 0;


if(localStorage.length > 0){
    let getData = localStorage.getItem('BusMallStorage');
    busMallArray = JSON.parse(getData);
    let TotalClicked = localStorage.getItem('TotalClickedStorage');
    }else{
    let TotalClicked = 25;    
    let backpack = new BusMall('backpack', './Assets/backpack.jpg', 'Back Pack');
    let sideBag = new BusMall('sideBag', './Assets/sideBag.jpg', 'Side Bag');
    let messengerBag = new BusMall('messenger bag', './Assets/messenger.jpg', 'bag');
    let beatsBlue = new BusMall('Beats blue', './Assets/beatsBlue.jpg', 'blue');
    let beatsPink = new BusMall('Beats pink', './Assets/beatsPink.jpg','pink');
    let beatsPurple = new BusMall('Beats purple', './Assets/beatsPurple.jpg','purple');
    let beatsRed = new BusMall('Beats red', './Assets/beatsRed.jpg','red');
    let sleepPillow = new BusMall('Pillow', './Assets/sleepPillow.jpg', 'pillow');
    let redBackpack = new BusMall('LV Supreme red', './Assets/lvSupremeRedBP.jpg', 'Supreme Red')
    let brnBackpack = new BusMall('LV brown backpack', './Assets/lvBrnBackpack.jpg', 'LV Brown');
    let blkBackpack = new BusMall('LV black backpack', './Assets/lvBlkBackpack.jpg','LV Black');
    let lvTrunk = new BusMall('LV Trunk','./Assets/lvTrunk.jpg','LV Trunk');
    let lvLuggageSet = new BusMall('LV Luggage set', './Assets/lvLuggageSet.jpg', 'LV LuggageSet');
    let lvLuggage = new BusMall('LV Luggage', './Assets/lvLuggage.jpg','LV Luggage');
    let rimGrey = new BusMall('Rimowa Grey', './Assets/rimowaGrey.jpg','Rimowa Grey');
    let rimSilver = new BusMall('Rimowa Silver', './Assets/rimowaSilverSet.jpg','Rimowa Silver');
    let goPro6 = new BusMall('GoPro Hero6', './Assets/goPro6.jpg','Hero6');
    let nikonZ7 = new BusMall('Nikon Z7', './Assets/nikonZ7.jpg','Nikon Z7');
    let supremeRed = new BusMall('Supreme Red', './Assets/supLugRed.jpg','Supreme LugRed');
    let supremeBlk = new BusMall('Supreme Black','./Assets/supLugBlk.jpg','Supreme Lugblk')
    busMallArray.push(backpack,sideBag,messengerBag,beatsBlue,beatsPink,beatsPurple,beatsRed,sleepPillow,redBackpack,brnBackpack,blkBackpack,lvTrunk,lvLuggageSet,lvLuggage,rimGrey,rimSilver,goPro6,nikonZ7,supremeRed,supremeBlk);
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
    };
    displayImages();
    TotalClicked += 1;
    console.log(TotalClicked);
    //save our data to local storage to be called. 
    localStorage.setItem('BusMallStorage', JSON.stringify(busMallArray));
    localStorage.setItem('TotalClickedStorage', TotalClicked);
    DisplayChartNow();
};

//saving our object info
// localStorage.setItem('storageBusMallArray', JSON.stringify(busMallArray));
// busMallArray = JSON.parse(localStorage.storageBusMallArray);
//let removeButton 
function DisplayChartNow(){
    if(TotalClicked > 25){
        //elImage.removeEventListener('click', imageClicked);
        elImageContainer.removeEventListener('click', imageClicked);
        DisplayChart();
        localStorage.clear();
    }
};


//function StartOverButton();
//need to fix line 128