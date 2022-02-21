import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter as itemsRouterW } from "./items/router.water";
import { itemsRouter as itemsRouterE } from "./items/router.electricity";
import { errorHandler } from "./middleware/error";
import { notFoundHandler } from "./middleware/not-found";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
} 

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/water", itemsRouterW);
app.use("/api/electricity", itemsRouterE);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });