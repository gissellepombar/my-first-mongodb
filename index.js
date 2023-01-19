// Let's connect to MongoDB and do some cool stuffs

// Import our library (just the tools we need)
import { MongoClient } from "mongodb";

// Import our credentials to connect 
import { uri } from "./secrets.js";

// Connect to our Mongo server
const client = new MongoClient(uri);

// Create a refernce to our database 
const db = client.db('mongo0');

// Let's add a document to our collection...

//Let's create a piece of furniture
const stool = {
    name: 'Ergo Stool',
    brand: 'Autonomous',
    color: 'Evergreen',
    price: 169.00,
    warrenty: '2 years'
}
const chair = {
    name: 'Ergo Chair',
    brand: 'Autonomous',
    color: 'Grey',
    price: 369.00,
    warrenty: '2 years'
}

async function addOneItem(item) {
    await db.collection('items'). insertOne(item);
    console.log('Item was added.')
}

addOneItem(stool);
addOneItem(chair)


// function addOneItem(item) {
// db.collection('items'). insertOne(item)
//     .then()
//     .catch()
// }
// addOneItem(stool);
// addOneItem(chair)

