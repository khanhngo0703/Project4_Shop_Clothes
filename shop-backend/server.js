import express from "express";
import cors from "cors";  // Import thư viện CORS
import db from "./models/index.js"; 
import routes from "./routes/routes.js";

const app = express();

// Sử dụng CORS middleware
app.use(cors({
    origin: "http://localhost:8080", // Cho phép frontend truy cập
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
