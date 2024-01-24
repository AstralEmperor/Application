import http from "node:http";
import cors from "cors";
import express from "express";
import { requests } from "./api-folder/api.mjs";

const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 3000;

requests().then(zahteviData => { 
    zahteviData;
    console.log("our json db has this:", zahteviData)
});


app.get("/requests", async (req, res, next) => {
    console.log("Hello from requests")
});
server.listen(PORT, () => {
    console.log('Server running on port 3000')
}) //port number