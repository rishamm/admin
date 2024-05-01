const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
     
    username:{type:String,required:true, unique:true},
     email:{type:String,required:true, unique:true},
     phone:{type:Number,required:true, unique:true},
     password:{type:String,required:true},
     wallet:{type:Number,
      default:0
   },
   refferals:{type:Number,
      default:0
   },
   income:{type:Number,
      default:0
   },
     isAdmin:{
        type:Boolean,
        default:false
     }},
    
     {timestamps:true}
);
module.exports= mongoose.model("User",UserSchema)