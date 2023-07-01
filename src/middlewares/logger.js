const logger = (req, res, next) => {

    console.log(`${req.method}\t${req.originalUrl}`);
    next();

};

module.exports = logger;