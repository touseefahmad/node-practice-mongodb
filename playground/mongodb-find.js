//mongo client lets you connect to mongo server
// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('unable to connect to database server');
  }
  console.log('connected to db server');
  // db.collection('Todos').find({
  //   //complete: false
  //   _id: new ObjectID('5a0ca4f77515ff1e68b877e0')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('todos count: ',count);
  // },(err)=>{
  //   console.log('unable to fectch from todos',err);
  // });
  db.collection('Users').find({name:'ali'}).toArray().then((docs)=>{
    console.log('connecting to users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to fetch users from Users',err);
  });

  //db.close();
});
