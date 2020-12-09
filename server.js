const express = require ('express')
const app = express()
const PORT = process.env.PORT || 5000
var cors = require('cors')
const axios = require('axios');

 
app.use(cors())

app.get("/test", async (req, res, next) => {
  console.log("'/test' call");
  try {
    const resp = await axios.get("https://fir-dynamiclinks-e43dd.web.app/practical-api.json");
    res.json(JSON.parse(JSON.stringify(resp.data)));
  }
  catch (err) {
    next(err)
  }
})



app.listen(PORT, () => {console.log(`server running on ${PORT}`)})