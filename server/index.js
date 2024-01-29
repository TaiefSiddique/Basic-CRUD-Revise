const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://basic-crud-revise:xOU9eXJ04o6ARABT@cluster0.nebbavw.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db('basicCRUD');
        // Reference the "people" collection in the specified database
        const col = db.collection('texts');

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.get('/texts', async (req, res) => {
            const cursor = col.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/texts', async (req, res) => {
            const data = req.body;
            const result = await col.insertOne(data);
            res.send(result);
        })

        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });


    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

