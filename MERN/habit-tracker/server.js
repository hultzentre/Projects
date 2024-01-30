const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion} = require('mongodb');
const app = express();
const port = 8080;




mongoose.connect('', {});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
	console.log('Connected to the database!');
});

app.get('/', (req, res) => {
	res.sendFile('client/index.html', {root: __dirname});	
});

app.get('/create', async (req, res) => {
	res.sendFile('client/pages/create.html', {root: __dirname});
	// Create a db collection here to test if the connection actually works
	await db.collection('users').insertOne({
		name: 'Tre',
		number: 831
	});
});

app.get('/addtask', async (req, res) => {
	res.sendFile('client/pages/addtask.html', {root: __dirname};
	// Create the addtask html, and also create an insert query to add the tasks collection to the specific user. 
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
