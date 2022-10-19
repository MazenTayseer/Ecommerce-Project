const Mongo = require("mongodb");
const {ObjectId} = require("mongodb");
const MongoClient = Mongo.MongoClient;

const URL = "mongodb://localhost:27017/test";

function MongoConnect(url) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (error, db) => {
      if (error) {
        reject(error);

        return;
      }
      resolve(db);
    });
  });
}

function createCollection(name) {
  return new Promise((resolve, reject) => {
    MongoConnect(URL).then((db) => {
      const dbo = db.db("Ecommerce");

      dbo.createCollection(name, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({result, db});
        db.close();
      });
    });
  });
}

function insertOne(collectionName, data) {
  return new Promise((resolve, reject) => {
    MongoConnect("mongodb://localhost:27017/test").then((db) => {
      const dbo = db.db("Ecommerce")
      dbo.collection(collectionName).insertOne(data, function (error, result) {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
        db.close()
      })
    })
  })
}

function find(collectionName, filter = {}) {
  return new Promise((resolve, reject) => {
    MongoConnect("mongodb://localhost:27017/test").then((db) => {
      const dbo = db.db("Ecommerce")
      dbo.collection(collectionName).find(filter).toArray((error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
        db.close()
      })
    })
  })

}

function findOne(collectionName, filter = {}) {
  return new Promise((resolve, reject) => {
    MongoConnect("mongodb://localhost:27017")
      .then((db) => {
        const dbo = db.db("Ecommerce");
        dbo.collection(collectionName).findOne(filter, (error, result) => {
          if (error) return reject(error);
          resolve(result);
          db.close();
        });
      })
  })

}

function update(collectionName, id, data) {
  return new Promise((resolve, reject) => {
    MongoConnect("mongodb://localhost:27017")
      .then((db) => {
        const dbo = db.db("Ecommerce");
        dbo.collection(collectionName).updateMany({_id: ObjectId(id)}, {$set: data}, (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
          db.close();
        });
      });
  })
}

function deleteOne(collectionName, id) {
  return new Promise((resolve, reject) => {
    MongoConnect("mongodb://localhost:27017")
      .then((db) => {
        const dbo = db.db("Ecommerce");
        dbo.collection(collectionName).deleteOne({_id: ObjectId(id)}, (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
          db.close();
        });
      });
  })
}


module.exports = {
  insertOne,
  find,
  findOne,
  update,
  deleteOne
}
