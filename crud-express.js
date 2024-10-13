const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Parse JSON request bodies

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Establish MongoDB connection
async function mongoDBConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/employees_details");
    console.log("Connection is successful");
  } catch (error) {
    console.error("Failed to establish connection:", error);
  }
}
mongoDBConnection();

// Define Schema
const empSchema = new mongoose.Schema(
  {
    em_Id: { type: Number, required: true, unique: true },
    em_Name: { type: String, required: true },
    em_Designation: { type: String },
    em_Address: { type: String },
    em_Contact: { type: String },
    em_Email: { type: String },
  },
  { collection: "employees_collection" }
);

// Create the Model
const Employee = mongoose.model("Employee", empSchema);

// Fetch all employees
app.get("/allEmployees", async (req, res) => {
  const employeesList = await Employee.find({});
  return res.status(200).json(employeesList);
});

// Update or add employee
app.put("/update", async (req, res) => {
  const { em_Id, ...updateData } = req.body; // Destructure to get em_Id and rest

  try {
    const employee = await Employee.findOneAndUpdate({ em_Id }, updateData, {
      new: true,
      upsert: true,
      runValidators: true,
    });

    if (employee.isNew) {
      return res.status(201).send("Employee added successfully."); // New employee added
    } else {
      return res.status(200).send("Employee details updated successfully."); // Existing employee updated
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Get employee by ID
app.get("/employee/:em_Id", async (req, res) => {
  const employee = await Employee.findOne({ em_Id: req.params.em_Id });
  return employee
    ? res.status(200).json(employee)
    : res.status(404).send("Employee Details are Not Found");
});

// Delete employee
app.delete("/delete/:em_Id", async (req, res) => {
  const employee = await Employee.findOneAndDelete({ em_Id: req.params.em_Id });
  return employee
    ? res.status(200).send("Employee details are Deleted Successfully")
    : res.status(404).send("Employee details are Not Found");
});
