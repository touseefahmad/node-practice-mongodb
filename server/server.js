var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/users');

var port = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.json());

//url,callback function
//httpstatus.com to check for statuses
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
//console.log('body:',req.body);
});

//Get /todo
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send(
      {
        code: '200',
        todos

      }
  );
  },(e)=>{
    res.status(400).send(e);
  })
});
app.listen(port,()=>{
  console.log('Listening port',port);
});
