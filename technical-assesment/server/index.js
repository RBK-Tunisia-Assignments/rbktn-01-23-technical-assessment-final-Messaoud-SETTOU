const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 4000;
const database = require('./database-mysql')
const bodyParser = require('body-parser')
const router = express.Router()
// TODO - add additional route handlers as necessary
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('./api', router)
require('./routes/recipiesRoute')(app)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
