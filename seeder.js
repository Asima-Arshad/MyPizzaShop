import mogoose from "mongoose";
import dotenv from "dotenv";
import {connectDB} from "./database/connection.js";
import Pizza from "./model/pizzaModel.js";
import  Pizzas from "./data/pizza-data.js";

//config dot env and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("DATA IMPOrted");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
