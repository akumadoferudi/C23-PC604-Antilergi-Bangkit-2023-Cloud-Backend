const { Op } = require('sequelize')
const {
    Article,
    Link,
    Article_Link
} = require('../db/models')

const listArticles = async (req, res) => {
    let searchRegexp = ''

        try{
            const { getResults } = req.query

            const searchSplit = getResults.split(' ')
            let searchLen = searchSplit.length
            searchSplit.forEach(element => {
                if (element === searchSplit[searchLen - 1]) {
                    searchRegexp += `.*${element}`
                }
                else {
                    searchRegexp += `.*${element}|`
                }
            });

            console.log(searchRegexp)
            console.log('get result:' + getResults)
            console.log(searchSplit)

            const articles = await Article.findAll({
                where: {
                    [Op.or]: [{
                        title: {
                            [Op.regexp]: `^(?=${searchRegexp})`
                        },
                    }, {
                        description: {
                            [Op.regexp]: `^(?=${searchRegexp})`
                        }
                    }, {
                        allergy: {
                            [Op.regexp]: `^(?=${searchRegexp})`
                        }
                    }, {
                        symptom: {
                            [Op.regexp]: `^(?=${searchRegexp})`
                        }
                    }]
                    
                },
                include: [{
                    model: Article_Link,
                    include: {
                        model: Link
                    }
                }]
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

module.exports = { listArticles }
