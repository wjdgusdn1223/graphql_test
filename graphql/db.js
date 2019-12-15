let movies = [
    {
        id: 0,
        name: "Logan",
        score: "92",
    },
    {
        id: 1,
        name: "DarkNight",
        score: "95",
    },
    {
        id: 2,
        name: "Kingkong",
        score: "88",
    },
    {
        id: 3,
        name: "Taken",
        score: "89",
    },
    {
        id: 4,
        name: "DragonBall",
        score: "60",
    },
    {
        id: 5,
        name: "Godfather",
        score: "90",
    },
    {
        id: 6,
        name: "Jocker",
        score: "99",
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteById = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else{
        return false;
    }
}