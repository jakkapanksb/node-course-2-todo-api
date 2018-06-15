const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b23dd4f76bb8b1ccc369e89').then((res) => {
  console.log(res);
});
