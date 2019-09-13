const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API'));

const taskStore = {};

app.put('/tasks', (req, res) => {
    const {id, label, isCompleted} = req.body;
    if (
        typeof id !== 'string' ||
        typeof label !== 'string' ||
        typeof isCompleted !== 'boolean'
    ) {
        return res.status(400).send({error: 'missing required keys'});
    } else {
        taskStore[id] = {id, label, isCompleted};
    }
});

app.get('/tasks', (req, res) => {
    const tasks = Object.keys().map(k => taskStore[k]);
    res.send({tasks});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
