import dotenv from "dotenv";

dotenv.config();

export const DB = process.env.DB_URL!;
export const PORT = parseInt(process.env.PORT!);