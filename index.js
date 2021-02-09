const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json())

app.get('/tools', async (req, res) => {
    await client.connect();
    // get the tools db
    const db = await client.db('tools');

    // get the tools collection and find everything in it
    const tools = await db.collection('tools').find({}).toArray();
    res.json(tools);
})


app.post('/tools', async (req, res) => {
    const theBody = req.body;
    await client.connect();
    const db = await client.db('tools');
    try {
        // insert body object to the tools collection (will be created if not exists)
        const newTool = await db.collection('tools').insertOne(theBody)

        // send the db generated id back to the client in case they want it
        res.status(201).json(newTool.insertedId)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})