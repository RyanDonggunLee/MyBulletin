const express = require('express');

const app = express();

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
