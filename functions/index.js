const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IsPsJSClFTvhmg7fjLpmKtIK5RueYZXK5rcc8Gu3C0XsN2F9Nfs2MHykQQG01p7El5o5STOMQKDu5KU3TB4O3VS00C1YYxybh"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello. I am the server page and I am running successfully."));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved. Amount: ", total);

    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount: total, // subunits of the currency
    //     currency: "usd",
    // });

    // OK - Created
    // response.status(201).send({
    //     clientSecret: paymentIntent.client_secret,
    // });
});

// - Listen command
exports.api = functions.https.onRequest(app);