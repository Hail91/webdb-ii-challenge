const express = require('express');
const knex = require('knex');

const knexConfiguration = {
    client: 'sqlite3',
    
    connection: {
        filename: './data/car-dealer.db3',
    },
    useNullAsDefault: true,
};

const router = express.Router();

const db = knex(knexConfiguration);

// CRUD BELOW...

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Failed to retrieve the cars'
            });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db("cars")
        .where("id", "=", id)
        .first()
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve that car" });
        });
});

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
        .insert(carData) 
        .then(cars => {
            db("cars")
                .where({ id: cars[0] })
                .then(newCar => {
                    res.status(201).json(newCar);
                });
        })
        .catch(err => {
            console.log("POST error", err);
            res.status(500).json({ message: "Failed to store vehicle data" });
        });
});

module.exports = router;