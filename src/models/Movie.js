import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title:{
        type: String,
        Require: true
    },
    overview:{
        type: String,
        Require: true
    },
    release_date:{
        type: String
    },
    poster_path:{
        type: String,
        require:true
    },
    likes:{
        type:Number,
        require: true
    }
})

export default model('Movie', movieSchema)