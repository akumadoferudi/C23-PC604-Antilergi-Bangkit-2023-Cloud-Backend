const { User } = require('../db/models')

const auth = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const checkAccount = await User.findOne({
            where: { email: email }
        })

        if (!checkAccount) throw Error('user tidak ditemukan!')

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
module.exports = { auth }

