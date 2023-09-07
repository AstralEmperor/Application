//requests page data
export async function requests(){
    const res = await fetch('../../../BackEnd/api-folder/data/requestsData.json',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const zahteviData = await res.json()
    .catch(error => console.warn(error))
    return zahteviData;
}

//users data\
export async function getKorisnici(){
    const res = await fetch('../../../BackEnd/api-folder/data/users.json',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const korisnici = await res.json()
    .catch(error => console.warn(error))
    return korisnici;
}

//login data
export async function getData(){
    const res = await fetch('../../../BackEnd/api-folder/data/loginData.json',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const loginInfo = await res.json()
    .catch(error => console.warn(error))
    return loginInfo;
}
//products data(for statistics)
export async function getProductStats(){
    const res = await fetch('../../../BackEnd/api-folder/data/products.json',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const products = await res.json()
    .catch(error => console.warn(error))
    return products;
}
// reviews data
export async function getReviews(){
    const res = await fetch('../../../BackEnd/api-folder/data/reviews.json',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const reviewData = await res.json()
    .catch(error => console.warn(error))
    return reviewData;
}
