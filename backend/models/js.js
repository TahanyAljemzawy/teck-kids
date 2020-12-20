const mongoose = require('mongoose');

const JS_Schema = new mongoose.Schema ({   
    Titles:
    {
        type: String,     
    },
    Videos: {
        type: String,      
    },
    Desceriptions: {
        type: String,   
    },
    userSchema:[
        {
            type: mongoose.Schema.Types.ObjectId,
          ref:"User"
      }
    ]
});

const js =  mongoose.model('js',JS_Schema);


module.exports = js;