const { gql} = require('apollo-server')
const { model } = require('mongoose')

const typeDefs = gql(`
    type Article {
        id: ID!
        title: String!
        content: String!
    } 
    type Query {
        articles: [Article]
        article(id: ID!): Article
    }
    input ArticleInput {
        title: String!
        content: String!
    }
    type Mutation {
        createArticle(articleInput: ArticleInput): Article
        updateArticle(id: ID!, articleInput: ArticleInput): Article!
    }   
    `
)

module.exports = typeDefs