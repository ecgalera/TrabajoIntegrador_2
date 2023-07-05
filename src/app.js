import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";
import config from "../config.js";
import cookieParser from "cookie-parser"
import initializePassportStrategies from "./config/passport.config.js";


import viewsRouter from "./router/viewsRouter/viewsRouter.js";
import productRouter from "./router/mongodb/productRouter.js";
import cartRouter from "./router/mongodb/cartRouter.js";
import ProductsRouter from "./router/fs_router/ProductRouter.js"
import cartsRouter from "./router/fs_router/cartRouter.js"
import SessionsRouter from "./router/mongodb/SessionsRouter.js";

const sessionsRouter = new SessionsRouter()

const PORT = config.app.PORT || 3000 ;
const MONGODB = config.URL.MONGO
const app = express();
const connection = mongoose.connect(MONGODB)

app.use(cookieParser())

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended:true}));
initializePassportStrategies();


app.use("/", viewsRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/carts", cartsRouter);

app.use("/api/sessions",sessionsRouter.getRouter() )


app.listen(PORT, ()=>{
    console.log(`Listen in Port: ${PORT}`)
});








