const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3306;

app.use(cors()),
app.use(express.json());

const connection = mysql.createConnection({
    host: '177.153.63.27',
    user:'nuvem_tech',
    password:'Ang456elos#',
    database:'nuvem_tech',
});

app.post('/api', async (req, res) =>{
    const {contratacao, trabalho, experiencia_necessaria, nivel, salario, descricao} = req.body;

    if (!contratacao || !trabalho || !experiencia_necessaria || !nivel || !salario || !descricao){
        return res.status(400).json({message: 'Todos os campos são obrigatórios'});
    }


    const sql = 'INSERT INTO Vaga (contratacao, trabalho, experiencia_necessaria, nivel, salario, descricao) VALUES (?, ?, ?, ?, ?, ?)';
   try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [contratacao, trabalho, experiencia_necessaria, nivel, salario, descricao], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        return res.status(200).json({ message: 'Vaga cadastrada com sucesso.' });
    } catch (error) {
        console.log('Erro ao cadastrar a vaga:', error.message); 
        return res.status(500).json({ message: 'Ocorreu um erro ao cadastrar a vaga', error: error.message }); // Enviar a mensagem de erro para o cliente
    }

});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});