const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b1eb103c154010c12ff2824';

// var id = '5b1fbb1123123582735e0c27c42ddd';

// if (!ObjectID.isValid(id)) {
//   return console.log('Id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(todo, undefined, 2));
}).catch((e) => {
  console.log(e);
});
