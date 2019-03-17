require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mongoDB atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@graphql-tutorial-6xhyi.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected do mongoDB')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('listening port 4000')
});
