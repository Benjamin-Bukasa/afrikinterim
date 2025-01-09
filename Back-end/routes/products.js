const express = require("express")
const productRoutes = express.Router()
const {getProducts,getProduct,postProduct, putProduct, patchProduct, deleteProduct} = require("../controllers/products")

productRoutes.route("/").get(getProducts)
productRoutes.route("/:id").get(getProduct)
productRoutes.route("/").post(postProduct)
productRoutes.route("/:id").put(putProduct)
productRoutes.route("/:id").patch(patchProduct)
productRoutes.route("/:id").delete(deleteProduct)


module.exports = productRoutes