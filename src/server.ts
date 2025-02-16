import express from "express";
import cors from "cors";
import { searchInData } from "./search";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("API do MultiSearch funcionando!");
});

app.get("/search", (req: express.Request, res: express.Response) => {
    const query = req.query.q as string;
    if (!query){

     return res.status(400).json({ error: "Query não pode estar vazia"});
    }
    const results = searchInData(query);
    res.json({ results });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
