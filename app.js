const express = require('express');
let app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.get('/', (req, res) => { 
    res.render("pages/index") 
});

app.post('/', (req, res) => {
})

app.listen(3000);