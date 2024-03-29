const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const taskController = require('./controller/task.controller')

const userController = require('./controller/user.controller')


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});



app.get('/api/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

// app.post('/api/user', (req, res) => {
//     console.log(req.body);
//     userController.createUser(req.body.task).then(data => res.json(data));
// });

// app.put('/api/user', (req, res) => {
//     userController.updateUser(req.body.task).then(data => res.json(data));
// });

// app.delete('/api/user/:id', (req, res) => {
//     userController.deleteUser(req.params.id).then(data => res.json(data));
// });









app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})