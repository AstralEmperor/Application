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