const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Article = mongoose.model("Article", articleModel);

Article.findByIdAndUpdate("623264435f3fb2297d048b7b", { title: "yqyqyqyqqyyq" })
  .then((articles) => {
    console.log(articles);
  })
  .catch((err) => console.log(err));

// Article.findByIdAndDelete("6232642a49411673b2276599")
//   .then((articles) => {
//     console.log(articles);
//   })
//   .catch((err) => console.log(err));

// Article.findOne({ "resume.content": "dddddddd" })
//   .then((articles) => {
//     console.log(articles);
//   })
//   .catch((err) => console.log(err));

// Article.find({ "resume.content": "dddddddd" })
//   .then((articles) => {
//     console.log(articles);
//   })
//   .catch((err) => console.log(err));

// const artigo = new Article({
//   title: "ccccc",
//   author: "cddcocdjod",
//   body: "djsdidjisjdoijsoijdoidjosjsoijdo",
//   resume: { content: "dddddddd", author: "ddddddddddm ddd" },
// });
// artigo
//   .save()
//   .then(() => {
//     console.log("Article saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
