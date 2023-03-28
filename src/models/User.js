import { Schema, model } from "mongoose";

const userSchema = new Schema({
    eamil:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

export default model('User', userSchema);