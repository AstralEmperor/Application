import { requests } from "../../../BackEnd/api-folder/api.js";
const requestBody = document.querySelector('.zahtevi__body');

// fetches json data, and then uses it to write up a table
    async function getRequest() {
        try{
            const zahteviData = await requests();

                let tableBody = document.querySelector('#data-output');
                let out = [];
        
                for(let zahtev of zahteviData){
                    // console.log(zahtev);
                    out+='<tr>\
                    <td class="zahtev__status">' + zahtev.status + '</td>\
                    <td>' + zahtev.lokacija + '</td>\
                    <td>' + zahtev.opservator + '</td>\
                    <td>' + zahtev.vrstaOpservacije + '</td>\
                    <td>' + zahtev.datumKreiranja + '</td>\
                    <td>' + zahtev.datumOdgovora + '</td>\
                    <td>' + zahtev.opservacija + '</td>\
                    </tr>';
                }
            
        
                tableBody.innerHTML = out;
        
            // Changes color of Status depending on Availability
                let statusZah = document.querySelectorAll('.zahtev__status');
                    for(let statusZ of statusZah){

                        if(statusZ.textContent == 'Zatvoren'){
 
                            statusZ.style.color = "#fb0101";
                        }else if(statusZ.textContent == 'Otvoren'){
;
                            statusZ.style.color = "#00cf00";
                        }else{
                            console.error('Naming error');
                        }
                }
            
                
                //displays number of items
                    let displayNum = document.getElementById("zahtevi__displayNumber");
                    const rows = document.querySelectorAll('tbody tr');
        
                    displayNum.textContent = "Prikaz " + 1 + "-" + rows.length + " od ukupno "+ rows.length +" zahteva";
                
                    for(let i = 0; i < rows.length; i++){
                        if( i % 2 !== 0){
                            rows[i].style.background = "#cfeff3";
                        }else{
                            rows[i].style.background = "#F4F4F4";
                        }
                        
                    }
            
        }catch (error) {
            console.log(error);
          }
    }

    getRequest();