const express = require ('express'); //recebe toda a biblioteca express//
const bodyParser = required('body-parser');

const app = express();

app.get('/', (req,res) => {
    res.send("muito obrigada pela ajuda");
});

app.get('/oie', (req, res) => {
    res.send("<h1>contatinhos</h1>");
});

app.post('/', (req, res) => {
    res.send("será que vai?");
});

app.listen(3000);