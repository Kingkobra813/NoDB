const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let banks = require('./banks').banks

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get("/bank/:bin", (request, response) => {
    //console.log("THIS IS THE BIN VALUE", request.params.bin);
    response.status(200).send(...banks.filter(element => {
        return element.bin === request.params.bin
    }));
})

app.post("/add-bank", (request, response) => {
    console.log(request.body);
    const newBanks = banks.filter(bank => bank.bin !== request.body.bin)
    newBanks.push(request.body);
    banks = newBanks
    response.send(banks)
})

app.listen(3005, () => {
    console.log("listening on port 3005 duh")
})