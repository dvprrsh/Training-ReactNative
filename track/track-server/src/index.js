const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Hi there');
});

const mongoUri =
  'mongodb+srv://adminDave:passwordDave@cluster0-2jgvv.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongoDB instance');
});

mongoose.connection.on('error', e => {
  console.log('Error connecting to mongoDB', e);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
