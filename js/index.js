import express from 'express';

const app = express();

app.get('/home', (req, res) => {
    res.send('Home');
});

app.get('/curriculoPdf', (req, res) => {
    res.send('Curriculo PDF');
});

app.get('/curriculoDocx', (req, res) => {
    res.send('Curriculo Docx');
});

app.listen(3030, () => {
    console.log('Deu bom bb');
});