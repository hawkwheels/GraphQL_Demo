// Start your es6 scripts here
import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'
const app = express()

app.get("/", (req,res) => {
    res.send ("first blood")
})

app.listen(8888, () => console.log("running at 8888"))

const root = resolvers; 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))