import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors";
import appRoutes from "./routes/index.routes.js";

// Loads .env file contents into process.env
config();

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(appRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_ATLAS_CONNECTION_URI = process.env.MONGO_ATLAS_CONNECTION_URI;

mongoose
  .connect(MONGO_ATLAS_CONNECTION_URI)
  .then(() => app.listen(PORT, () => console.log(`Ruunig on port: ${PORT}`)))
  .catch((error) => console.log(error));
