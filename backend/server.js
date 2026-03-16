const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/leads", (req,res)=>{
db.query("SELECT * FROM leads",(err,result)=>{
if(err) throw err;
res.json(result);
});
});

app.post("/leads",(req,res)=>{

const {name,phone,email,source,status} = req.body;

const sql = "INSERT INTO leads (name,phone,email,source,status) VALUES (?,?,?,?,?)";

db.query(sql,[name,phone,email,source,status],(err,result)=>{
if(err) throw err;
res.send("Lead Added");
});

});

app.get("/dashboard",(req,res)=>{

db.query("SELECT status, COUNT(*) as count FROM leads GROUP BY status",(err,result)=>{
if(err) throw err;
res.json(result);
});

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});