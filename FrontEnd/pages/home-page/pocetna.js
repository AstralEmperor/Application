import { getReviews } from "../../../BackEnd/api-folder/api.js";

const buttonGoTo = document.querySelector('.home__startBtn');

function goTo(){
    buttonGoTo.addEventListener('click', () => {
        window.location = '../products/proizvodi.html';
    })
}
goTo();

async function getReviewData(){
    try{
        const reviewData = await getReviews();
        return reviewData;
    }catch(error){
        console.warn(error);
    }
}

// Creates stars based on calculations ( if rating is close to full number or is full number - write  )
function prototype(reviewData){
    let totalReview = 0;
    let j = 0;
    const displayRating = document.querySelector('.home__rating');
    for(let review of (reviewData.reviews)){
        if(review.stars != undefined){
            j++;
            totalReview += parseFloat(review.stars);
        }
        let calculate = (totalReview / j).toFixed(1);
        const maxStars = 5;
        let spanPrint = '';
        let i = 1;
        let halfStar = true;
  
        const rating = calculate;
        // console.log(calculate)
        // do this opperation until while condition is fullfilled
        do{ 
          if(rating >= i - 0.4){ // writes full star if number is .6 to .0 
            spanPrint+= `<img loading="lazy" src="../../assets/star_full+shadow.png" alt="star_full.png">`
            i++;
        }else if(halfStar && rating >= i - 0.9){ // if there is half a star, add half-star and change boolean to false so it stops printing half a star
            spanPrint+= `<img loading="lazy" src="../../assets/star_half+shadow.png" alt="star_half.png">`
            halfStar = false;
            i++;
          }else if(rating < i  && i <= maxStars){ // if i is bigger than rating and smaller or equal to maxStars, add empty star
            spanPrint+= `<img loading="lazy" src="../../assets/star_empty+shadow.png" alt="star_empty.png">`
            halfStar = false;
            i++;
          }
        }
          while(i <= maxStars);
          displayRating.innerHTML = spanPrint;

          const writeNumber = document.querySelector('.home__ratingNumber');
          writeNumber.textContent = calculate + `/` + maxStars;
 }
}
// rating <= i + 0.4 && halfStar || rating > j - 0.4
getReviewData().then(reviewData => {
    reviewData;
    prototype(reviewData);
})