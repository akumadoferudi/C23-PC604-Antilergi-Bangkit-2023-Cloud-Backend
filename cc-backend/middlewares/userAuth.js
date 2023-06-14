const { User } = require('../db/models')

const loginAuth = async (req, res, next) => {
    try {
        

        next();

    } catch (err) {
        console.log(err)

        res
        .status(404)
        .json({
            status: 'fail',
            message: err.message
        })
    }
 }
module.exports = { loginAuth }

