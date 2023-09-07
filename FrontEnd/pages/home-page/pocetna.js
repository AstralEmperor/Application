import { getReviews } from "../../../BackEnd/api-folder/api.js";

async function getReviewData(){
    try{
        const reviewData = await getReviews();
        return reviewData;
    }catch(error){
        console.warn(error);
    }
}

function prototype(reviewData){
    const cardContainer = document.querySelector('.review__cardWrap');

    let reviewInfo='';
    for(let review of (reviewData.reviews)){
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
              <span>star</span>
              <span>star</span>
              <span>star</span>
              <span>star</span>
              <span>star</span>
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