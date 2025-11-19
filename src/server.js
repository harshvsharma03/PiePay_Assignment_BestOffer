require("dotenv").config();

const app = require("./app");
const db  = require("./config/db");

db();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server running on port " + PORT);
});