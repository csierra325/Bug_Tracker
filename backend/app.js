const express = require ('express');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendend: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
   "Origin, X-Requested-With, Content-Type, Accept"
);
   res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, DELETE, OPTIONS"
   );
   next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: 'post added successfully'
  })
});


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
    message: 'Posts fetched successfully!',
    posts: posts
  });

  });

  module.exports = app;
