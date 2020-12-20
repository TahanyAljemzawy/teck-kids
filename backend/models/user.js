const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    userName:{
        type: String,
        required : true,
        trim: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        trim: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        trim: true,
        max: 1000,
        min: 6
    },
    age:{
        type: Number,
      required: true,
       trim: true    
    }, 
    image:{
        typt:String,
      },
  
     progress:{
         type:Boolean
         
      },
     role:{
         type:String,
         enum :[ "student" , "teacher"]
      },
    HTML_Schema:[
          {
              type: mongoose.Schema.Types.ObjectId,
            ref:"Html"
        }
      ],
  
     CSS_Schema:[
          {
              type:mongoose.Schema.Types.ObjectId,
              ref:"css"
            }
      ],
  
     JS_Schema:[
          {
              type:mongoose.Schema.Types.ObjectId,
              ref:"js"}
      ] 
   
});

const User = mongoose.model('User', userSchema);

module.exports = User;
