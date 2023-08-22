import { requests } from "../../../BackEnd/api-folder/api.mjs";
import { getKorisnici } from "../../../BackEnd/api-folder/api.mjs";
import { getProductStats } from "../../../BackEnd/api-folder/api.mjs";

const statsContainer = document.querySelector('.statistics__stats-container');
   // async funkcija za pozivanje asinhrone date
async function getStats(){
    const bKorisnika = document.getElementById('bKorisnika');
    const bOpservacija = document.getElementById('bOpservacija');
    const bProizvoda = document.getElementById('bProizvoda');
    const bProdato = document.getElementById('bProdato');
    const bDostavljeno = document.getElementById('bDostavljeno');
    const bTransport = document.getElementById('bTransport');
    const bCekanje = document.getElementById('bCekanje');

    try{
        const zahteviData = await requests()
        const korisnici = await getKorisnici();
        const products = await getProductStats();
        
        let korisnikNumber = korisnici.length;
        let brojZahteva = zahteviData.length;
        let brojProizvoda = products.currentItems;
        let prodato = products.sold;
        let dostavljeno = products.delivered;
        let transport = products.transporting;
        let cekanje = products.pending;


        // ovaj deo ispisuje
        bKorisnika.innerText = korisnikNumber;
        bOpservacija.innerText = brojZahteva; 
        bProizvoda.innerText = brojProizvoda; 
        bProdato.innerText = prodato; 
        bDostavljeno.innerText = dostavljeno; 
        bTransport.innerText = transport;
        bCekanje.innerText = cekanje;

    }catch(error){
        console.log(error);
    }
}
getStats();
