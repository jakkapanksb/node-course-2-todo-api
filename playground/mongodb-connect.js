// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tar',
  //   age: 22,
  //   location: 'Bangkok'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  db.close();
});
