const { Article } = require('../db/models')

const listArticles = async (req, res) => {
    let {judul} = req.params; 
        try{
            const {search} = req.query 
            const Articles = await Article.findAll()
            res
            .status(201)
            .json({
                status: 'ok',
                data: Articles
            })
            .end()

        }catch (err){
            console.log(err)
            res
            .status(404)
            .json({
                status: 'fail',
                message: 'Artikel Tidak ditemukan'
            })
            .end()
        } 
}

module.exports = {
    listArticles
}
