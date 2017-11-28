//mongo client lets you connect to mongo server
// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('unable to connect to database server');
  }
  console.log('connected to db server');
  //find one and update
  //findOneAndUpdate(filter,update,options,callback)
  db.collection('Todos').findOneAndUpdate(
    {
      _id: new ObjectID('5a142311e4340013e74dfa9a')
    },
    {
      // $inc:{
      //   dob: 1
      // },
      $set:{
        complete: true
      }
    },
    {
      returnOriginal: false
    }).then((result)=>{
      console.log(result);
    });
  //db.close();
});
