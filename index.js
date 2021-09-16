const { ApolloServer, gql } = require('apollo-server')
const PORT = 4000

//schema
const typeDefs = gql `
    type Query {
        hello: String
    }
`

//resolver
const resolver = {
    Query: {
        hello: function() {return 'Hello wecome to GraphQL'}
    }
}

const server = new ApolloServer({typeDefs,resolver})

server.listen(PORT).then(({url})=>console.log(`Server started at ${url}`))



