const express = require('express');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        console.log(`db is connected`)
        app.set('db', dbInstance)
    })
    .catch((err)=>{
        console.log(`DB Broken ${err}`)
    })

app.get('/api/inventory', (req, res, next) => {
    const db = req.app.get('db');
    db.GET_PRODUCTS()
        .then((inventory) => {
            res.send(inventory)
        })
})

app.post('api/inventory', (req, res, next) => {
    const db = req.app.get('db');
    const {img_url, product_name, price} = req.body;
    db.products_table.insert({
        img_url,
        product_name,
        price
    })
    .then((inventory) => {
        res.send(inventory)
    })
})

const port = process.env.PORT || 8040;

const port = 3001;
app.listen(port, () => {
    console.log('server listening on port ${port}')
});