const express = require('express');

const app = express();

app.use((req, res, next) =>  {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: 'asdf12asd',
      title: 'First server-side post',
      content: 'This is coming from backend'},
    {
      id: 'asfwasdf12',
      title: 'Second server-side post',
      content: 'This is coming from backend!'}
  ];
  res.status(200).json({
    message: 'Posts feched successfully',
    posts: posts
  });
});

module.exports = app;
