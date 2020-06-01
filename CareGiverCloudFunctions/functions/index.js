const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://care-giver-project.firebaseio.com"
});

const express = require('express');
const garmin = express();
const db = admin.database();
const fs = admin.firestore();

const cors = require('cors');
garmin.use( cors( {origin:true} ) );


//Post

//Dailies
garmin.post('/api/dailies', (req, res) => {
    (async () => {
        try
        {
            const dataArray = req.body.dailies;
            console.log('dailies', dataArray); // req.body.dailies[0].userId);
            cred = fs.doc(`users/${req.body.dailies[0].userId}/garmin/${req.body.dailies[0].calendarDate}`);
            for(let data of dataArray) {
                cred.set({dailies: data}, {merge: true});
            }

            return res.status(200).send();
        }
        catch (error)
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//stress
garmin.post('/api/stress', (req, res) => {

    (async () => {

        try
        {
            const dataArray = req.body.stressDetails;
            console.log('stress', dataArray);
            cred = fs.doc(`users/${req.body.stressDetails[0].userId}/garmin/${req.body.stressDetails[0].calendarDate}`);
            for(let data of dataArray) {
                cred.set({stress: data}, {merge: true});
            }

            return res.status(200).send();
        }
        catch (error)
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//sleep
garmin.post('/api/sleeps', (req, res) => {
    (async () => {
        try
        {
            const dataArray = req.body.sleeps;
            console.log('sleeps', dataArray);
            cred = fs.doc(`users/${req.body.sleeps[0].userId}/garmin/${req.body.sleeps[0].calendarDate}`);
            for(let data of dataArray) {
                cred.set({sleeps: data}, {merge: true});
            }

            return res.status(200).send();
        }
        catch (error)
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//pulseOX
garmin.post('/api/pulseOX', (req, res) => {

    (async () => {

        try
        {
            const dataArray = req.body.pulseox;
            console.log('pulseOX', dataArray);
            cred = fs.doc(`users/${req.body.pulseox[0].userId}/garmin/${req.body.pulseox[0].calendarDate}`);
            for(let data of dataArray) {
                cred.set({pulseox: data}, {merge: true});
            }

            return res.status(200).send();
        }
        catch (error)
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});




//Get

garmin.get('/api/read/:id', (req,res) => {
    (async () =>{
        try {
            const document = fs.collection('users').doc(req.params.id).collection('garmin').doc(new Date().toDateString());
           // document = db.ref('users'+req.params.id);
            let users = await document.get();
            let response = users.data();
            console.log(response);

            return res.status(200).send(response);
        } catch (error){
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})


//Export the api to Firebase Cloud Functions
exports.garmin = functions.https.onRequest(garmin);
