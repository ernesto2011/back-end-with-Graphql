import Movie from "../models/Movie.js";
import User from "../models/User.js";

const Query = {
    async getMovies(){
        const movies = await Movie.find();
        return movies
    },

    //querys form users
    async getUsers(){
        const users = await User.find();
        return users
    },
    async login(_,{email, password}){
        const verifyUser = await User.findOne({email, password});
        console.log(verifyUser);
        return verifyUser
        
    }
}

export default Query