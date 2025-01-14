const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3000
const app = express()
const userRoutes = require("./routes/users")
const offerRoutes = require("./routes/offers")
const productRoutes = require("./routes/products")
const articleRoutes = require("./routes/articles")
const authUser = require("./routes/auth")


app.use(express.json())
app.use("/afrikinterim/api/",authUser)
app.use("/afrikinterim/api/users",userRoutes)
app.use("/afrikinterim/api/offers",offerRoutes)
app.use("/afrikinterim/api/products",productRoutes)
app.use("/afrikinterim/api/articles",articleRoutes)




app.listen(port, ()=>{console.log(`Le serveur est démarré au port ${port}`);
})