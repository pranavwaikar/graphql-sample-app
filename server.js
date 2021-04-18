// first hello world with graphql

const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const app = express()
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');




const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Helloworld",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'hello world'
            }
        })
    })
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}));


app.listen(3000, ()=> {
    console.log('started at 3000 port');
});

