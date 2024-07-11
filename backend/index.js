import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
// app.use(express.json());

app.use(cors(
  {
    origin:["https://mern-stack-bookshell.vercel.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true

  }


))

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('https://mern-stack-bookshell.vercel.app/books', booksRoute);

mongoose
  .connect('mongodb+srv://wwwmking3000:A7LIfLNbOBaqFdVG@bookstore.fthy7qn.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore')
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
