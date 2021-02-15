const express = require('express');
const Tool = require('./data-access/models/tool');
var mongoose = require('mongoose');
const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';

//Import the mongoose module
// //Set up default mongoose connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection

//Bind connection to error event (to get notification of connection errors)

app.use(express.json())

app.get('/tools', async (req, res) => {
    console.log('adsf');
    const tools = await Tool.find()
    res.json(tools);
})

app.post('/tools', async (req, res) => {
    const theBody = req.body;

    const newTool = new Tool({ ...theBody })

    try {
        // insert body object to the tools collection (will be created if not exists)
        await newTool.save();

        // send the db generated id back to the client in case they want it
        res.status(201).json()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})