const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/',(req, res)=>{
    res.render('index')
})
app.use(express.static('public'));
app.get('/project',(req, res)=>{
    res.render('project')
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})