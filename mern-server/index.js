const cors = require('cors')
require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 5000


// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
// Change this link with new mongodb Cluster link
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.grqmol8.mongodb.net/?retryWrites=true&w=majority`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Change the collection with current project
    const booksCollection = client.db('BooksInventory').collection('books')


    // Insert a book to the db: post method
    app.post('/upload-book', async(req, res)=> {
      const data = req.body;
      const result = await booksCollection.insertOne(data);
      res.send(result);
    })

    // Get all the books from the database: get method
    // app.get('/all-books', async(req, res)=> {
    //   const books = booksCollection.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })

    // Update the books data: patch or update method
    app.patch('/books/:id', async(req, res)=> {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)}
      const options = { upsert: true };
      const updateDoc = {
        $set: {
            ...updateBookData
        }
      }

      // Update
      const result = await booksCollection.updateOne(filter, updateDoc, options);
      res.send(result)
    })


    // Delete a book data : Delete method
    app.delete('/book/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksCollection.deleteOne(filter);
      res.send(result)
    })


    // find by category: 
    app.get('/all-books', async(req, res)=> {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result)

    })
    



    


    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)



app.get('/', (req, res) => {
  res.send('Book Intentory Server is running..')
})



app.listen(port, () => {
  console.log(`Book Intentory is running on port ${port}`)
})