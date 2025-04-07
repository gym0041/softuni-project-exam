import express from 'express'
import { getData } from './utils/products.js'
import productRouter from './routes/products.js'
import authRouter from './routes/auth.js'
const app = express()

app.use(express.static("src/public"))
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

    next()
})


app.use(authRouter)
app.use("/products", productRouter)

app.listen(5000, () => {
    console.log("Server listening on http://localhost:5000...")
})