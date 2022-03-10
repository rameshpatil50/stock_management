// get the client
const mysql = require('mysql2');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

app.use(cors())

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'stock_management'
});

connection.connect((err) => {
    if(err){
        console.log(err)
        process.exit();
    } else {
        console.log("DB Connected")
    }
 });

 app.get('/get_stock', (request, response) => {
    const quary = 'SELECT * FROM stock';
    connection.query(quary, (error, result) => {
        if(error){
            console.log(error);
        } else {
            response.send(result);
        }
    }) 
 })

app.post('/add_stock', (request, response) => {
    const stock = request.body.stock;
    const quary = ''
})

app.post('/add_stock', (request, responce) => {
    const id = request.body.id;
    const new_stock = request.body.Curent_stock;
    const query = `UPDATE stock SET Current_stock = Current_stock + ${new_stock} WHERE id = ${id};`;
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            responce.status(500).send({
                success: false,
                msg: error
            });
        } else {
            if (result.affectedRows) {
                responce.status(200).send({
                    success: true,
                    msg: "Task added"
                });
            } else {
                responce.status(400).send({
                    success: false,
                    msg: "Task not added"
                });
            }
        }
    })
})

 app.listen(5000, () => {console.log("app is running on port 5000")})