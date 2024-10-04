const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8000;
// Middleware   
app.use(bodyParser.json());
app.use(cors());
//start port
app.get("/",(req,res) => {
  res.send("server is running")
});
app.get("/home",(req,res) => {
  res.sendFile(path.join(__dirname,"../client/index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
