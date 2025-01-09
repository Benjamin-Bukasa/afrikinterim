const express = require("express")
const offerRoutes = express.Router()
const {getOffers, getOffer, postOffer, putOffer, patchOffer, deleteOffer} = require("../controllers/offers")


offerRoutes.route("/").get(getOffers)
offerRoutes.route("/:id").get(getOffer)
offerRoutes.route("/").post(postOffer)
offerRoutes.route("/:id").put(putOffer)
offerRoutes.route("/:id").patch(patchOffer)
offerRoutes.route("/:id").delete(deleteOffer)




module.exports = offerRoutes