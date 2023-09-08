import { getReviews } from "../../../BackEnd/api-folder/api.js";

async function getReviewData(){
    try{
        const reviewData = await getReviews();
        return reviewData;
    }catch(error){
        console.warn(error);
    }
}
function stars(reviewData){
  const maxStars = 5;
  const spanPrint = '';
  let i = 0;
  let rating = reviewData.stars;
    while(i < rating && rating < maxStars){
      spanPrint+= `<img src="../../assets/star_full.png">`
      i++;
      if(rating == .5){
        spanPrint+= `<img src="../../assets/star_half.png">`
        i++;
      }else{
        spanPrint+= `<img src="../../assets/star_empty.png">`
        i++;
      }
    }
  
}

function prototype(reviewData){
    const cardContainer = document.querySelector('.review__cardWrap');

    let reviewInfo='';
    for(let review of (reviewData.reviews)){

      const maxStars = 5;
      let spanPrint = '';
      let i = 1;
      let halfStar = true;

      const rating = review.stars;
      // do this opperation until while condition is fullfilled
      do{ 
        if(rating >= i){ // if i is bigger or equal compared to rating, add full star
          spanPrint+= `<img src="../../assets/star_full.png">`
          i++;
      }else if(rating <= i + 0.5 && halfStar){ // if there is half a star, do this and change boolean to false so it stops printing half a star
          spanPrint+= `<img src="../../assets/star_half.png">`
          halfStar = false;
          i++;
        }else if(rating < i  && i <= maxStars){ // if i is bigger than rating and smaller or equal to maxStars, add empty star
          spanPrint+= `<img src="../../assets/star_empty.png">`
          i++;
        }
      }
        while(i <= maxStars);

       reviewInfo+=`
        <div class="review__card review__card--1">
        <div class="review__wrapInfo">
            <div class="review__imgWrap">
              <img class="review__image" src="`+ review.image +` " alt="review-img1.jpg">
            </div>
          <div class="review__info">
            <p class="review__name">
              `+ review.name +`
            </p>
            <div class="review__stars">
            ` + spanPrint +`
            </div>
            <p class="review__comment">
            `+ review.comment +`
            </p>
        </div>
        </div>
      </div>`
    }
    cardContainer.innerHTML = reviewInfo;
}
getReviewData().then(reviewData => {
    reviewData;
    prototype(reviewData);
})

const previousBtn = document.querySelector('.home__btn--previous');
const nextBtn = document.querySelector('.home__btn--next');
const carousel = document.querySelector('.home__carousel');
const images = Array.from(carousel.children);
const dotsCont = document.querySelector('.home__dots');
const dots = Array.from(dotsCont.children);

//takes first image current width(based on screen size)
const carouselWidth = images[0].getBoundingClientRect().width;

// slides carousel based on index number and carousel width
const setSlidePosition = (slide, index) => {
  slide.style.left = carouselWidth  * index + 'px';
}

images.forEach(setSlidePosition);

const moveToSlide = (carousel, currentImage, targetImage) => {
  carousel.style.transform = 'translateX(-' + targetImage.style.left + ')';
  currentImage.classList.remove('current-image');
  targetImage.classList.add('current-image');
}

//removes class on previous dot, adds it to new one(next/previous)
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-dot');
  targetDot.classList.add('current-dot');
}

const hideShowArrows = (images, previousBtn, nextBtn, targetIndex) => {
  if(targetIndex === 0){// if targeted index is first item in array, turn off btnPrevious
    previousBtn.classList.add('is-hidden');
    nextBtn.classList.remove('is-hidden');

  }else if(targetIndex === images.length - 1){ // if target index is the last item, turn off btnNext
    previousBtn.classList.remove('is-hidden');
    nextBtn.classList.add('is-hidden');

  }else{  // in every other case, show both arrows
    previousBtn.classList.remove('is-hidden');
    nextBtn.classList.remove('is-hidden');
  }
}

//on previousBtn click look for nextTarget based on index, and siblings
previousBtn.addEventListener('click', () => {
    const currentImage = document.querySelector('.current-image');
    const previousImage = currentImage.previousElementSibling;

    const currentDot = document.querySelector('.current-dot');
    const previousDot = currentDot.previousElementSibling;

    const prevIndex = images.findIndex(image => image === previousImage);

    updateDots(currentDot, previousDot);
    moveToSlide(carousel, currentImage, previousImage);
    hideShowArrows(images, previousBtn, nextBtn, prevIndex);
})
//on nextBtn click look for nextTarget based on index, and siblings
nextBtn.addEventListener('click', () => {
    const currentImage = document.querySelector('.current-image');
    const nextImage = currentImage.nextElementSibling;

    const currentDot = document.querySelector('.current-dot');
    const nextDot = currentDot.nextElementSibling;

    const nextIndex = images.findIndex(image => image === nextImage);

    updateDots(currentDot, nextDot);
    moveToSlide(carousel, currentImage, nextImage);
    hideShowArrows(images, previousBtn, nextBtn, nextIndex);
})

//add event listener to whole dotsContainer and if clicked target is Button, 'do action',else do nothing
dotsCont.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentImage = document.querySelector('.current-image');
  const currentDot = document.querySelector('.current-dot');

  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetImage = images[targetIndex];

  updateDots(currentDot, targetDot);
  moveToSlide(carousel, currentImage, targetImage);
  hideShowArrows(images, previousBtn, nextBtn, targetIndex);
})