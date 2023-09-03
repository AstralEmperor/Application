//requests page data
export async function requests(){
    const res = await fetch('../../../BackEnd/api-folder/data/requestsData.json',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const zahteviData = await res.json()
    .catch(error => console.log(error))
    return zahteviData;
}

//users data\
export async function getKorisnici(){
    const res = await fetch('../../../BackEnd/api-folder/data/users.json',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const korisnici = await res.json()
    .catch(error => console.log(error))
    return korisnici;
}

//login data
export async function getData(){
    const res = await fetch('../../../BackEnd/api-folder/data/loginData.json',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const loginInfo = await res.json()
    .catch(error => console.log(error))
    return loginInfo;
}

export async function getProductStats(){
    const res = await fetch('../../../BackEnd/api-folder/data/products.json',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    const products = await res.json()
    .catch(error => console.log(error))
    return products;
}
