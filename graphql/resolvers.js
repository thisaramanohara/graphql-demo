const Article = require('../model/article')

const resolvers = {
    Query: {
        articles: ()=>{return Article.find()},
        article: (parent, args) => {return Article.findById(args.id)}
    },
    Mutation: {
        createArticle: (parenr, args) => {
            let article = new Article(args.articleInput)
            return article.save()
        },
        updateArticle:(parent, args) => {
            return Article.findByIdAndUpdate(args.id, args.articleInput,{new:true})
        }
    }
}

module.exports = resolvers