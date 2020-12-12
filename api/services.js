const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());


// EndPoints
app.post('/pets', async(req, res) => {
    try {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        const { data } = await axios.post(`${process.env.SERVICES_URL}?token=${process.env.TOKEN}`, req.body);
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.sendStatus(500);
        }
    }
});
app.get('/getpets', async(req, res) => {
    try {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
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
app.post('/deletepets', async(req, res) => {
    const { id } = req.body;
    try {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
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
module.exports = {
    path: '/api/services',
    handler: app,
};