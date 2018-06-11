// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name: "Tar"}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //findOneandDelete
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b1e97014438f104c8211a4e")}).then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // });

  db.close();
});
