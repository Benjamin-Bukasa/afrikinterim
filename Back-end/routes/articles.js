const express = require("express")
const articleRoutes = express.Router()
const {getArticle, getArticles, postArticle, putArticle,patchArticle,deleteArticle} = require("../controllers/articles")

articleRoutes.route("/").get(getArticles).post(postArticle)
articleRoutes.route("/:id").get(getArticle).put(putArticle).patch(patchArticle)
articleRoutes.route("/:id").delete(deleteArticle)



module.exports = articleRoutes