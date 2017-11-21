//mongo client lets you connect to mongo server
// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');
// var obj =new ObjectID();
// console.log(obj);

//object destructing lets you get variable out of an object
// var user ={name: 'ta', dob:'25'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('unable to connect to database server');
  }
  console.log('connected to db server');
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   complete: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert a todo');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  db.collection('Users').insertOne({name: 'touseef',
    dob:'08-10-1990',
    location:'Islamabad,Pakistan'},(err,result)=>{
    if(err){
      return console.log('Unable to add user');
    }
  //  console.log(JSON.stringify(result.ops,undefined,2));
  console.log(result.ops[0]._id);
  });
  db.close();
});
