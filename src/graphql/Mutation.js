import Movie from "../models/Movie.js";
import User from "../models/User.js";

const Mutation = {
    async createMovie(_,{title, overview, release_date, poster_path, likes}){
        const newMovie={title, overview, release_date, poster_path, likes};
        const movie = await Movie.create(newMovie);
        return await Movie.find()
    },
    async createUser(_,{email, password}) {
        const newUser = {email, password};
        const user = await User.create(newUser);
        return user

    }
}
 export default Mutation;