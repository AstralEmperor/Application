import { requests } from "../../BackEnd/api-folder/api.mjs"

// fetches json data, and then uses it to write up a table
    async function getRequest() {
        try{
            const zahteviData = await requests();
            console.log(zahteviData)
                // console.log(zahteviData)
                let out = [];
        
                class zahtev{
                    constructor(){
                        this.lokacija = lokacija,
                        this.opservator = opservator,
                        this.vrstaOpservacije = vrstaOpservacije,
                        this.datumKreiranja = datumKreiranja,
                        this.datumOdgovora = datumOdgovora,
                        this.opservacija = opservacija
                    }
                    get zahtev(){
                        return this.zahtev;
                    }
                }
                console.log(zahtev)
            } catch(error) {
                throw(error);
            }
        }
        getRequest()