const express = require("express")
const router = require("./router")

const app = express()

app.use(express.json())
app.use(router)

const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => console.log("running on port", PORT))