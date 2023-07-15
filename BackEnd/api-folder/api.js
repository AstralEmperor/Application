//requests page data
export async function requests(){
    const res = await fetch('../../../BackEnd/server/api-folder/data/requestsData.json');
    const zahteviData = await res.json()
    .catch(error => console.log(error))
    return zahteviData;
}
//users data\
export async function getKorisnici(){
    const res = await fetch('../../../BackEnd/server/api-folder/data/users.json');
    const korisnici = await res.json()
    .catch(error => console.log(error))
    return korisnici;
}

//login data
export async function getData(){
    const res = await fetch('../../../BackEnd/server/api-folder/data/loginData.json');
    const loginInfo = await res.json()
    .catch(error => console.log(error))
    return loginInfo;
}