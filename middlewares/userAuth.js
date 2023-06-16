const { User } = require('../db/models')
const jwt = require('jsonwebtoken')

const userAuth = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res
        .status(403)
        .json({
            status: 'fail',
            message: 'Anda belum login!'
        })
    }

    try {
        const decoded = jwt.verify(token, 'secretKey')
        const user = User.findOne({
            where: { id: decoded.userId }
        })

        if (!user) throw Error('User tidak valid!')

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
module.exports = { userAuth }

