const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
require('dotenv').config();
const app = express();


const corsOptions = {
  origin: process.env.CORS_URL, 
  credentials: true,              
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Models
const Address = require('./models/Address');
const Order = require('./models/Order');

// Save address and order
app.post('/api/cart', async (req, res) => {
  try {
    const { firstName, lastName, street, apt, state, zip } = req.body;
    const addressId= uuidv4()

    const newAddress = new Address({ uuid:addressId,firstName, lastName, street, apt, state, zip });
    await newAddress.save();

// Set a dummy session ID as cookie (can be JWT or user ID in real apps)
    res.cookie('addressID', addressId, {
      httpOnly: true,
      sameSite: true,
      secure: "None" // set true if using HTTPS
    });

    const itemPrice = 7999;
    const shipping = 200;
    const tax = 1400;
    const beforeTax = itemPrice + shipping - tax;
    const total = itemPrice + shipping;

    const newOrder = new Order({
      items: ['Silhouette No. 1 - Vermilion'],
      itemPrice,
      shipping,
      tax,
      beforeTax,
      total,
      addressId
    });

    await newOrder.save();

    res.status(200).json({
      message: 'Address and order saved successfully',
      orderSummary: {
        itemName: 'Silhouette No. 1 - Vermilion',
        itemPrice,
        shipping,
        beforeTax,
        tax,
        total
      }
    });
  } catch (error) {
    console.error('Error saving cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/cart', async (req, res) => {
  try {
     const addressID = req.cookies.addressID;

    if (!addressID) {
      return res.status(401).json({ error: 'Unauthorized access. Please submit address first.' });
    }

    const order = await Address.findOne({ uuid: addressID });


    if (!order) {
      return res.status(404).json({ error: 'No order found for this user' });
    }

    const address = await Address.findById(order.addressId);

    res.status(200).json({ order, address });

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});
app.get('/api/price', async (req, res) => {
  try {

    const order = await Order.findOne({});


    if (!order) {
      return res.status(404).json({ error: 'No order found for this user' });
    }

    res.status(200).json({ order });

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
