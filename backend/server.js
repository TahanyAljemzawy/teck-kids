var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();
//the stripe is for the payment by card
var uuid = require('uuid/v4')
//the Routes
const authRoutes  = require('./routes/auth');
const courseRoute = require('./routes/courseRoute');
const userRoute   =require('./routes/userRoute')
//const payments    = require('./routes/payments');
const stripe = require("stripe")("sk_test_51I3lU8JcY9KJTdicHsybG4B51PGZdmBbOdJK4NmGPGKnq06nNExdmgPfPb7vHg2wqBhUehIdb57QP3ZdvkQYk8eY00ceh1JI0w");

require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
//

// Routes
app.use('/api',authRoutes);
app.use('/course',courseRoute);
app.use('/user',userRoute);
//app.use('/payments',payments)

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
       /* shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }*/
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});



//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

