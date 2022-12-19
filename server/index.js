const { MongoClient } = require("mongodb");

// Connection URI
const uri =  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const res = await client.db("mstore_db").collection("goods").find({}).toArray();

    console.log(res[0]);
  } finally {
    await client.close();
  }
}


run().catch(console.dir);