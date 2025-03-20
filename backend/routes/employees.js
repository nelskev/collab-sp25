import express from "express";
import Employee from "../models/employeeModel.js";

const router = express.Router();




// GET ALL EMPLOYEES   
router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find(); 
        res.json(employees);  
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching employees" });
    }
});
 
// GET EMPLOYEE BY ID  
router.get("/:id", async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);  
        if (!employee) {
            return res.status(404).json({ status: "Employee not found" });
        }
        res.json(employee);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching employee" });
    }
});

// POST NEW EMPLOYEE
router.post("/", async (req, res) => {
    const { name, age, salary, role } = req.body; 
    console.log('POST request received at /employees');
    console.log('Request body:', req.body);
    try {
        const newEmployee = new Employee({ name, age, salary, role });  
        await newEmployee.save();  
        res.status(201).json(newEmployee);  
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving employee" });
    }
});


// UPDATE EMPLOYEE 
router.put("/:id", async (req, res) => {
    const { name, age, salary, role } = req.body;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, age, salary, role },
            { new: true }  
        );
        if (!updatedEmployee) {
            return res.status(404).json({ status: "Employee not found" });
        }
        res.json({ status: `${updatedEmployee.name} has been updated` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error updating employee" });
    }
});

// DELETE EMPLOYEE
router.delete("/:id", async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ status: "Employee not found" });
        }
        res.json({ status: `Employee "${deletedEmployee.name}" deleted` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error deleting employee" });
    }
});

export default router;
 