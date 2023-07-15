// made with help from https://www.section.io/engineering-education/a-raw-nodejs-rest-api-without-frameworks-such-as-express/

import { createServer } from "http";
import  { RequestDataControl } from './api-folder/services/requestData.mjs'
import { getReqData } from "./api-folder/utility.mjs";

const PORT = process.env.PORT || 5000;

const server = createServer(
    async(req,res) => {
        //setting request route
        if(req.url === "/api/zahtevi" && req.method === "GET"){
            //response header
            const zahtevii = await new RequestDataControl().getZahteviData();
            //setting the response
            res.writeHead(200, {"Content-Type": "application/json"});
            //end the response
            res.end(JSON.stringify(zahtevii));
        }else if(req.url.match(/\/api\/zahtevi\/([0-9]+)/) && req.method === "DELETE"){ //if no route present
            try{
                const id = req.url.split("/")[3];

                let message = await new RequestDataControl().deleteRequest(id);
                res.writeHead(200, {"Content-Type" : "application/json"});
                res.end(JSON.stringify({ message}))
            }catch(error){
                res.writeHead(404, {"Content-Type":"application/json"});
                res.end(JSON.stringify({ message: error}));
            }
        }else if(req.url.match(/\/api\/zahtevi\/([0-9]+)/) && req.method === "PATCH"){ 
            try{
                const id = req.url.split("/")[3]

                let updated_zahtevi = await new RequestDataControl().updateRequests(id);

                res.writeHead(200, {"Content-Type": "application/json"});

                res.end(JSON.stringify(updated_zahtevi));
            }catch(error){
                res.writeHead(404, {"Content-Type": "application/json"});

                res.end(JSON.stringify({message:error}));
            }
        }else if(req.url === "/api/zahtevi" && req.method === "POST"){
            let zahtevi_data = await getReqData(req);
            let zahtevi = await new RequestDataControl().createZahteviData(JSON.parse(zahtevi_data));

            res.writeHead(200, { "Content-Type":"application/json"});

            res.end(JSON.stringify(zahtevi));
        }else{
            res.writeHead(404, {"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Route not found"}));
        }
    });

    server.listen(PORT, () => {
        console.log(`server started on port: ${PORT}`);
    })