const Movie = require("./model");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });    
    }
};

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ allMovie: movies })
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message }); 
    }
};

exports.listMovie = async (req, res) => {
    try {
        const liMovie = await Movie.findOne(req.title);
        res.status(200).send({ movie: liMovie })
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message }); 
    }
};


exports.updateMovie = async (req, res) => {
    try {
        const upMovie = await Movie.updateOne(
            { [req.body.filterKey]: req.body.filterVal },
            { [req.body.updateKey]: req.body.updateVal }
        );
        res.status(200).send({ movie: upMovie });
    } catch (error) {
        console.log(error);  
        res.status(500).send({ err: error.message });   
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const delMovie = await Movie.deleteOne(
            { [req.params.filterkey]: req.params.filterVal, }
        );
        res.status(200).send({ movie: delMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });   
    }
};