import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js"; // Import database connection
import employeesRoutes from "./routes/employees.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());
  
// Routes
app.use("/employees", employeesRoutes);

// Connect to MongoDB
connectToDatabase();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
