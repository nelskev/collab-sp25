import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js"; // Import database connection

// ROUTES
import reviewsRoutes from "./routes/reviews.js"
import appointmentRoutes from "./routes/appointments.js";
import contactsRoutes from "./routes/contacts.js"; // added by MarcoRamos 4/04/2025
// import adminRoutes from "./routes/admins.js"; // added by Kevin 4/18/2025
import adminCreate from "./routes/adminCreate.js"; // added by Kevin 4/19/2025
import adminSignin from "./routes/adminSignin.js"; // added by Kevin 4/19/2025


dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());
  

// USE Routes
app.use("/reviews", reviewsRoutes);
app.use("/appointments", appointmentRoutes)
app.use("/contacts", contactsRoutes); // added by MarcoRamos 4/04/2025
// app.use("/admins", adminRoutes); // added by Kevin 4/18/2025
app.use("/admin/create", adminCreate); // added by Kevin 4/19/2025
app.use("/admin/signin", adminSignin); // added by Kevin 4/19/2025


// Connect to MongoDB (using the import above)
connectToDatabase();


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
