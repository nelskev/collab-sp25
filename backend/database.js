import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // Load .env

// Connect to Mongo 
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.URL);    // URL from .env file
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    }
};

export default connectToDatabase;




// function database() {
//     let employees = [{
//        // "id": 1,
//         "name": "Phil",
//         "age": 58,
//         "salary": 67500,
//         "role": "manager"
//     },
//     {
//        // "id": 2,
//         "name": "Larry",
//         "age": 41,
//         "salary": 34000,
//         "role": "base-agent"
//     },
//     {
//       //  "id": 3,
//         "name": "William",
//         "age": 28,
//         "salary": 95000,
//         "role": "manager"
//     }]
//     return employees
// }

// export default database()






