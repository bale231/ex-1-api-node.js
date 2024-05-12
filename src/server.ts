import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.listen(PORT, () => {
  console.log(`My server, listening to http://localhost:3000/api/planets`);
});
