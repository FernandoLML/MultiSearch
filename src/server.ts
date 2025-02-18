import express, {  Request, Response } from "express";
import cors from "cors";
import { searchInData } from "./search";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("API do MultiSearch funcionando!");
});

app.get("/search", (req: Request, res: Response) => {
    const query = req.query.q as string;
  
    let statusCode = 200;
    let response;
  
    if (!query) {
      statusCode = 400;
      response = { error: "Query não pode estar vazia" };
    } else {
      response = { results: searchInData(query) };
    }
  
    res.status(statusCode).json(response);
  });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
