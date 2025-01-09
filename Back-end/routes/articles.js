const express = require("express")
const articleRoutes = express.Router()
const {getArticle, getArticles, postArticle, putArticle,patchArticle,deleteArticle} = require("../controllers/articles")

articleRoutes.route("/").get(getArticles)
articleRoutes.route("/:id").get(getArticle)
articleRoutes.route("/").post(postArticle)
articleRoutes.route("/:id").put(putArticle)
articleRoutes.route("/:id").patch(patchArticle)
articleRoutes.route("/:id").delete(deleteArticle)



module.exports = articleRoutes