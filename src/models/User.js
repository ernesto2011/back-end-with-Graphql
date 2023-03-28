import { Schema, model } from "mongoose";

const userSchema = new Schema({
    emaiil:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

export default model('User', userSchema);