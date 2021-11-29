const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk'];

app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        const queryItem = req.query.item.toLowerCase();
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(queryItem));
        res.status(200).send(filteredItems);
        return;
    }
    res.status(200).send(inventory);
});

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[req.params.index]);
});

app.listen(5050, () => console.log("Server running on port 5050"));