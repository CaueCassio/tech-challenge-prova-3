const express = require('express');
const bodyParser = require('body-parser');
const conect = require('./config/database');
const vehicleRoutes = require('./routes/vehicleRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();


app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/purchase', purchaseRoutes);

module.exports = app;
