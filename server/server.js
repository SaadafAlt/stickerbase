// import MongoClient from "mongodb";       no longer relevant as we have the line below
const mongo = require('mongodb')
const mClient = mongo.MongoClient;

const express = require("express");     // importing the library
const app = express();                  // creating an instance of the library / setting up the library


const PORT = process.env.PORT || 5000;  // setting up the port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // starting the server  

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = require("./models/Item"); // Create the Item model


const cors = require("cors");
require("dotenv").config({ path: "./config.env" }); // config file

app.use(cors());
app.use(express.json());    // parse into a json data
/* Source from: 
https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial */

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

async function findOne() {
    let conn;
    try {
        conn = await client.connect();
    } catch(e) {
        console.error(e);
      }
      
      try {
          const db = client.db("testdb");
          let collection = db.collection('stickers');
          let query = {source: 'sunhacks'};
          let res = await collection.findOne(query);
          console.log(res);
      } catch(err) {
        console.log(err);
      } finally {
        client.close();
      }
}

/* Creating a GET request */
// app.get("/api/items", async (req, res) => { // promise
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

/* Code from:
https://medium.com/@kaklotarrahul79/step-by-step-guide-connecting-mongodb-with-react-js-for-seamless-full-stack-development-db51c34da282#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjFmNDBmMGE4ZWYzZDg4MDk3OGRjODJmMjVjM2VjMzE3YzZhNWI3ODEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE3MDQ4MTk4MjEsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMDk1OTA2ODY3MjQxOTAwNDM3NCIsImVtYWlsIjoic2FhZGFmbW9oc2luQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSG9sJyBVcCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLbjZadGtqU3Breld1LXFoTmdOVGRpS3pNTUJmTXhzOVhacERXb2xpUkRXSUE9czk2LWMiLCJnaXZlbl9uYW1lIjoiSG9sJyIsImZhbWlseV9uYW1lIjoiVXAiLCJpYXQiOjE3MDQ4MjAxMjEsImV4cCI6MTcwNDgyMzcyMSwianRpIjoiOGFmOGY2ZWU3MGVkNDAwYWEzNjU0NmMxODA0MTc2NjYzYTQ2ZGI1OSJ9.YGp1My0HglkJ7g3Vi5P_8VCoPK1WFAwII6dp0uwLnWbOL9dmA2kfG_-ZsSW3EfdnftGGaSz0G7RQNj88L6JsR8EHy_I2QNhySc0Ygu4fS9b2NjqOBmadBB95uACEpFPkpRllvcS_UJeGbqblyb7RHhn2hBifLXtucMSkcNRWUr8Qy8T5RodAB1TF4R2leudu9zfKh494q8F0sdu8mMVxXMb5h3mJIlYKIDrheTdvexwLiEt9in60mH_Nxc4x2-e6wNMiXXLbQsezX8F6-MJPpfbvXO6qp1xMN0ADs0lxrbura88J_ZsyKXmUOmjs4Jb2RxY-uwzM7MfJQinEaYtqPg
*/



/* get driver connection */
// app.listen(port, () => {
//     // perform a database connection when server starts
//     dbo.connectToServer(function (err) {
//       if (err) console.error(err);
//      });
//     console.log(`Server is running on port: ${port}`);
//   });
  

