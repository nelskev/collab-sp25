import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js"; // Import database connection

// ROUTES
import employeesRoutes from "./routes/employees.js";
import reviewsRoutes from "./routes/reviews.js"


dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());
  

// USE Routes
app.use("/employees", employeesRoutes);
app.use("/reviews", reviewsRoutes);


// Connect to MongoDB
connectToDatabase();


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
