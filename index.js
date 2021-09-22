const { ApolloServer} = require('apollo-server')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const mongoose = require('mongoose')

const PORT = 4000

const URL = 'mongodb://localhost:27017/my_local_db'
mongoose.connect(URL,{useNewUrlParser:true})

mongoose.connection.once('open', ()=> {
    console.log('Database connection successfull');
})

mongoose.connection.on('error', ()=>{
    console.log('Error while connecting database');
})

const server = new ApolloServer({typeDefs,resolvers})

server.listen(PORT).then(({url})=>console.log(`Server started at ${url}`))



