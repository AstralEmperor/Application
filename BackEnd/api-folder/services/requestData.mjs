// made with help from https://www.section.io/engineering-education/a-raw-nodejs-rest-api-without-frameworks-such-as-express/

//DOESNT WORK!


import { requests} from "../api.mjs";

requests().then(zahteviData => zahteviData);

export class RequestDataControl{
    async getZahteviData(){
        return new Promise((resolve, _) => resolve(zahteviData));
    }
    async getZahteviData(id){
        return new Promise((resolve, reject) => {
            let zahtevi = zahteviData.find((zahtevi) => zahtevi.id === parseInt(id))
            if(zahtevi){
                resolve(zahtevi);
            }else{
                reject(`RequestData with id ${id} not found`);
            }
        });
    }
    async createZahteviData(){
        return new Promise((resolve, _) => {
            let newRequest = {
                id: Math.floor(7 + Math.random() * 10),
                ...zahtevi,
            };
            resolve(newRequest);
        });
    }
    async updateRequests(id){
        return new Promise((resolve, reject) => {
            //get the list,if no list return error ,else update
            let zahtevi = zahteviData.find((zahtevo) => zahtevi.id === parseInt(id));
            if(!zahtevi){
                reject(`No request with id ${id} found`);
            }
            zahtevi["completed"] = true;
            resolve(zahtevi);
        });
    }
    async deleteRequest(id){
        return new Promise((resolve, reject) => {
            let zahtevi = zahteviData.find((zahtevi) => zahtevi.id === parseInt(id))
            if(!zahtevi){
                reject(`No request with ${id} found`)
            }
            resolve(`Request deleted succesfully`)
        })
    }
}