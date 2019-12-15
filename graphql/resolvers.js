import { getMovies, getById, deleteById } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        deleteMovie: (_, { id }) => deleteById(id)
    }
};

export default resolvers;