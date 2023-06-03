 const { nanoid } = require('nanoid');
 const {  User } = require('../db/models')

 const create = async (req, res) => {
    try {
        const { id } = nanoid(16)

        const { 
            nama,
            email,
            password 
        } = req.body

        await User.create({
            id,
            nama,
            email,
            password
        })

        res
        .status(200)
        .json({
            status: 'ok',
            message: 'user berhasil dibuat!'
        })
        .end()
        // redirect to login page (PR)

    } catch (err) {
        console.log(err)
        res
        .status(500)
        .json({
            status: 'fail',
            message: 'user gagal dibuat!',
            error: err
        })
    }
 }

 const edit = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id)
        if (!user) throw Error('user tidak ditemukan!')

        const { 
            nama,
            email,
            password
        } = req.body


        await user.update({
            nama,
            email,
            password
        })

        res
        .status(200)
        .json({
            status: 'ok',
            message: 'user berhasil diperbarui!'
        })
        .end()

    } catch (err) {
        console.log(err)
        res
        .status(404)
        .json({
            status: 'fail',
            message: err.message,
            error: err
        })
        .end()
    }
 }




 module.exports = {
    create,
    edit
 }