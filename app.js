const express = require("express")
const bodyPareser = require("body-parser")
const cource_Routes = require("./routes/user")
const app = express()
const port = process.env.PORT || 6000;

app.use(bodyPareser.json())
app.use("/cource", cource_Routes)

app.listen(port, () => {
    console.log("server connected")
})