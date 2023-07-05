import dotenv from "dotenv";

dotenv.config();

export default {
    app:{
        PORT: process.env.PORT
    },
    URL:{
        MONGO: "mongodb+srv://egalera:123@cluster0.y0qkwla.mongodb.net/trabInteg?retryWrites=true&w=majority"
    }
}
