const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const {ApolloServer} =require('apollo-server-express');
const typeDefs = require('./graphqlHelpers/typeDefinitions');
const resolvers = require('./graphqlHelpers/resolvers');
const envs = require('./utils/env');
const app = require('./app');


const startServer = async()=>{
        const port = envs.envPort || 5000;
        const apolloServer = new ApolloServer({
                typeDefs,
                resolvers,
                introspection: true,
                plugins: [
                        ApolloServerPluginLandingPageGraphQLPlayground({
                        })
                      ],
        });
        await apolloServer.start(); 
        apolloServer.applyMiddleware({app, path:"/graphql"});
        app.use((_req,res)=>{
                res.send("hello from apollo server");
        });
        app.listen(port,()=>{console.log(`running on port ${port}`);});
        
} 
module.exports = startServer;
 