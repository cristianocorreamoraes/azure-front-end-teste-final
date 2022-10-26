const express = require('express');
const axios = require('axios').default;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const requisicoes = (rota)=>{

    switch (rota) {
        case 'read':
            console.log('READ');
            
            break;

        case 'create':
            console.log('CREATE');

            break;

        case 'update':
            console.log('UPDATE');

            break;

        case 'delete':
            console.log('DELETE');

            break;
    
        default:
            break;
    }

}

module.exports = requisicoes;