const express = require("express");
const mongoose = require("mongoose");

const newApp = express();

// Middleware to parse JSON requests
newApp.use(express.json());

// Define the port
const SERVER_PORT = 8080;
newApp.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`);
});

// MongoDB connection
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Aadhar_database");
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}
connectToDatabase();

// Defining a new Schema
const studentDataSchema = new mongoose.Schema(
  {
    aadharNumber: { type: String },
    fullName: { type: String },
    isMarried: { type: String },
    location: { type: String },
    pin: { type: String },
    country: { type: String },
  },
  { collection: "Aadhar_collection" }
);

// Create a Model
const StudentData = mongoose.model("StudentData", studentDataSchema);

// Endpoint to add student data from request body
newApp.post("/employeesAadhar", async (req, res) => {
  const studentData = req.body; // Expecting an array of student objects
  try {
    await StudentData.insertMany(studentData);
    return res
      .status(201)
      .json({ message: "Employees Aadhar details are added successfully." });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to add employees Aadhar details.", error: err });
  }
});

// Endpoint to fetch all student data
newApp.get("/employeesAadhar", async (req, res) => {
  console.log("Fetching employee Aadhar details from MongoDB... ");
  const allEmployees = await StudentData.find({});
  return res.status(200).json(allEmployees);
});
