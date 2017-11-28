var mongoose =require('mongoose');
//Model todo
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength:5,
    trim: true
    //trim will remove leading or trailing white space
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};
