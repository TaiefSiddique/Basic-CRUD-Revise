const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://basic-crud-revise:xOU9eXJ04o6ARABT@cluster0.nebbavw.mongodb.net/?retryWrites=true&w=majority";

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


        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.get('/texts', (req, res) => {
            res.send("data wil be shown here");
        })

        app.post('/texts', (req, res) => {
            const data = req.body;
            res.send(data)
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

