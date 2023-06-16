 const { nanoid } = require('nanoid')
 const { User } = require('../db/models')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
//  const { generateApiKey } = require('generate-api-key');

const userLists = async (req, res) => {
    try {
        const users = await User.findAll()

        res
        .status(200)
        .json({
            status: 'ok',
            data: users
        })
        .end()
    } catch (err) {
        res
        .status(500)
        .json({
            status: 'fail',
            message: err.message
        })
        .end()
    }
}

 const create = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(5)
        const id = salt + nanoid(10)

        console.log('salt: ' + salt)

        const { 
            username,
            email,
            password 
        } = req.body

        await User.create({
            id,
            username,
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
            username,
            email,
            password
        } = req.body

        await user.update({
            username,
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

 const generateApiLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const checkAccount = await User.findOne({
            where: { email }
        })
        console.log('pass: ' + password)

        if (!checkAccount) throw Error('user tidak ditemukan! (email salah)')

        const checkPassword = await bcrypt.compare(password, checkAccount.password)
        console.log('pass_hash: ' + checkAccount.password)
        console.log('test: ' + checkPassword)

        if (!checkPassword) throw Error('user tidak ditemukan! (password salah)')

        const apiToken = jwt.sign({ userId : checkAccount.id }, 'secretKey',
            { expiresIn: '1d' })
        const validUser = await checkAccount.update({ API_Key: apiToken })

        res
        .status(200)
        .json({
            status: 'ok',
            data: validUser
        })

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
 
 const logout = async (req, res) => {
    const { id } = req.params
    try {
        const token = jwt.verify(id, 'secretKey')
        if (!token) throw Error('Anda belum login!')
        else if (id !== token.userId) throw Error('User tidak ditemukan')
        
        const user = await User.findOne({
            where: { id: token.userId }
        })
        if (!user) throw Error('User tidak ditemukan')

        await user.update({
            API_Key: ''
        })

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

 module.exports = {
    userLists,
    create,
    edit,
    generateApiLogin,
    logout
 }