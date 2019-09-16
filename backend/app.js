const express = require ('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
 const posts = [
  {
    id: 'fadf124211',
    title:"First server-side post",
    content: "This is coming from the server"
},
{
  id: "lajfdsasf",
  title: "second server-side post",
  content: "this is coming from the server!"
}

 ];
  res.status(200).json({
    message: 'Posts feteched successfully!',
    posts: posts
  });

  });

  module.exports = app;
