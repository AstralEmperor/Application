export function getReqData(req) {
    return new Promise ((resolve, reject) => {
        try{
            let body="";
            //listen to data sent by client
            req.on("data", (chunk) => {
                //append string to body
                body += chunk.toString();
            });
            req.on("end", () => {
                //send back data
                resolve(body);
            });
        }catch(error){
            reject(error);
        }
    });
}