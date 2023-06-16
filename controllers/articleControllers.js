const { Op } = require('sequelize')
const {
    Article,
    Link,
    Article_Link
} = require('../db/models')

const listArticles = async (req, res) => {
    // let searchRegexp = ''
    let searchResult = []
    const getResults = req.params.getResults
        try{
            console.log('param: ' + getResults)

            const searchSplit = getResults.split(' ')
            searchSplit.forEach(element => {
                searchResult.push(element)
                // if (element === searchSplit[searchSplit.length - 1]) {
                //     searchRegexp += `.*${element}`
                // }
                // else {
                //     searchRegexp += `.*${element}|`
                // }
            });

            // console.log('regexp: ' + searchRegexp)
            console.log('get result:' + getResults)
            console.log(searchSplit)

            const articles = await Article.findAll({
                where: {
                    title: {
                        [Op.regexp]: `${searchResult.join('|')}`
                    }
                },
                include: [{
                    model: Article_Link,
                    include: {
                        model: Link
                    }
                }],
            })

            console.log(articles)
            res
            .status(201)
            .json({
                status: 'ok',
                data: articles
            })
            .end()

        } catch (err) {
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
const listAll = async (req, res) => {
    try {
        const articles = await Article.findAll()

        console.log(articles)
            res
            .status(200)
            .json({
                status: 'ok',
                data: articles
            })
            .end()
    } catch (err) {
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

module.exports = { listArticles, listAll }
