const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());


// EndPoints
/**
 * This is EP for create a new Pet
 */
app.post('/addpet', async(req, res) => {
    try {
        const { data } = await axios.post(`${process.env.BASE_URL}?token=${process.env.TOKEN}`, req.body);
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.sendStatus(500);
        }
    }
});
/**
 * This is EP for get all Pets
 */
app.get('/allpets', async(req, res) => {
    try {
        const { data } = await axios.get(`${process.env.BASE_URL}?token=${process.env.TOKEN}`, {
            params: JSON.parse(req.header('params') || '{}'),
        });
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.sendStatus(500);
        }
    }
});
/**
 * This is EP for delete a Pet
 */
app.post('/deletepet', async(req, res) => {
    const { id } = req.body;
    try {
        const { data } = await axios.delete(`${process.env.BASE_URL}/${id}?token=${process.env.TOKEN}`);
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.sendStatus(500);
        }
    }
});
/**
 * This is EP for update Pet
 */
app.post('/updatepet', async(req, res) => {
    const { id } = req.query;
    try {
        const { data } = await axios.put(`${process.env.BASE_URL}/${id}?token=${process.env.TOKEN}`, req.body);
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.sendStatus(500);
        }
    }
});
module.exports = {
    path: '/api/services',
    handler: app,
};
