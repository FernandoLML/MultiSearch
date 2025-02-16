import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API do MultiSearch funcionando!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});
