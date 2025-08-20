const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.db_uri;

export const collectionList={
    userCollection:"userCollection",
    productCollection:"productCollection"
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function dbConnect(collectionName) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    return await client.db(process.env.db_name).collection(collectionName);
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("Something went wrong, database is not connected")
  }
}
