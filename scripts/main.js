let slideImages = document.querySelectorAll('.slide'),
arrowRight =  document.querySelector('#arrow-right'),
arrowLeft = document.querySelector('#arrow-left'),
current= 0 ;


//reset 

const reset = () =>  {
    for(let i=0 ; i < slideImages.length ; i++){
        slideImages[i].style.display = "none";
    }
}

const startSlide = () =>  {
    reset();
    //display first image
    slideImages[0].style.display="block";
    current++;
}

console.log(slideImages[current-1]);
const slideLeft = () => {
   reset();
   slideImages[current-1].style.display= "block";
   current--;
}   

const slideRight = () =>{
    reset();
    slideImages[current+1].style.display= "block";
    current++;
   
}



arrowLeft.addEventListener('click',()=>{
    // if it is at the first picture
    // if user clicks previous, they will be lead to the last picture
    if(current===0){
        current = slideImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click',()=>{
    // if it is at the last picture
    // we want the next image to be the first image in the array
    console.log(current);
  if(current === slideImages.length-1){
    current = -1;
}
    slideRight();
});

startSlide();
