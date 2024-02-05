import express from "express";
import cors from "cors";
import { adminRouter } from "./routes/AdminRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods:['GET','POST','PUT'], // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }));
// app.use(cors());
app.use("/auth", adminRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
