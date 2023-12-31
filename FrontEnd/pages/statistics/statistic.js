import { requests } from "../../../BackEnd/api-folder/api.js";
import { getKorisnici } from "../../../BackEnd/api-folder/api.js";
import { getProductStats } from "../../../BackEnd/api-folder/api.js";

   // async funkcija za pozivanje asinhrone date
async function getStats(){
    const bKorisnika = document.getElementById('bKorisnika');
    const bOpservacija = document.getElementById('bOpservacija');
    const bProdato = document.getElementById('bProdato');
    const bDostavljeno = document.getElementById('bDostavljeno');
    const bTransport = document.getElementById('bTransport');
    const bPrimedbe = document.getElementById('bPrimedbe');
    const companyN = document.getElementById('companyName');

    try{
        const zahteviData = await requests()
        const korisnici = await getKorisnici();
        const statistics = await getProductStats();
        
        let korisnikNumber = korisnici.length;
        let brojZahteva = zahteviData.length;
        let prodato = statistics.data2023.sold;
        let dostavljeno = statistics.data2023.delivered;
        let transport = statistics.data2023.transporting;
        let complaint = statistics.data2023.complaints;
        let company = statistics.companyName;


        // ovaj deo ispisuje
        bKorisnika.innerText = korisnikNumber;
        bOpservacija.innerText = brojZahteva; 
        bProdato.innerText = prodato; 
        bDostavljeno.innerText = dostavljeno; 
        bTransport.innerText = transport;
        bPrimedbe.innerText = complaint;
        companyN.innerText = company;

    }catch(error){
        console.log(error);
    }
}
getStats();

// done with help from https://www.chartjs3.com/docs/chart/getting-started/
const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
    datasets:[{
        label: 'Monthly Sales',
        data: [22, 122, 232 ,405, 334, 502, 496, 643],
        backgroundColor: [ 
            'rgba(255, 26, 104, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 59, 44, 0.4)',
            'rgba(0, 0, 0, 0.4)'
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 59, 44, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}
//render block
 const myChart = new Chart(
    document.getElementById('myChart'),
    config
 );
