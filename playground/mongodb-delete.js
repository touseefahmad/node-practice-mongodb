//mongo client lets you connect to mongo server
// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('unable to connect to database server');
  }
  console.log('connected to db server');
  //delete many
  // db.collection('Todos').deleteMany({text: 'walk the cat3'}).then((result)=>{
  //   console.log(result);
  // });

  //delete One
  // db.collection('Todos').deleteOne({text: 'walk the cat3'}).then((result)=>{
  //   console.log(result);
  // });
  //findone and deleteOne
  db.collection('Todos').findOneAndDelete({complete: false}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
