const Article = require('../model/article')

const resolvers = {
    Query: {
        articles: ()=>{return Article.find()},
        article: (parent, args) => {return Article.findById(args.id)}
    }
}

module.exports = resolvers