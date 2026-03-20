const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let todos = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add', (req, res) => {

    let task = req.body.task;
    todos.push(task);

    let list = "<h2>TODO LIST</h2>";

    todos.forEach((t,i)=>{
        list += (i+1) + ". " + t + "<br>";
    });

    res.send(list + "<br><a href='/'>Back</a>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
