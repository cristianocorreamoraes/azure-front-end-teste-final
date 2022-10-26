const express = require('express');

const app = express();

const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('index');
});

let URLBase = 'https://azure-back-end-teste-final.azurewebsites.net/';

app.get('/read', (req, res)=>{

    let URLRead = URLBase + 'read';
    axios.get(URLRead)
		.then((response)=>{
			console.log(response.data);
			res.send(response.data);
		});

});

app.get('/create', (req, res)=>{

    let URLCreate = URLBase + 'create';
    axios.post(URLCreate)
		.then((response)=>{
			console.log(response.data);
			res.send(response.data);
		});
	
});

app.get('/update', (req, res)=>{
	
    let URLUpdate = URLBase + 'update';
    axios.put(URLUpdate)
		.then((response)=>{
			console.log(response.data);
			res.send(response.data);
		});

});

app.get('/delete', (req, res)=>{
	
    let URLDelete = URLBase + 'delete';
    // console.log(URLDelete);
    // res.send(URLDelete);
    axios.delete(URLDelete)
		.then((response)=>{
			console.log(response.data);
			res.send(response.data);
		});

});

const port = process.env.PORT || 3001

app.listen(port, ()=>{
	console.log('SERVIDOR FRONT-END RODANDO EM http://localhost:3001');
});