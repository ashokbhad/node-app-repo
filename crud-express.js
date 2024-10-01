const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Define the port
app.listen(8080, () => {
  console.log(`Server started on port: 8080`);
});

// Establish the mongodb connection using Promise
// mongoose.connect("mongodb://localhost:27017/students_database")
// .then(()=>{
//     console.log("Connection is successful");
// }).catch( (error) =>{
//     console.log("Failed to establish with error: ", error);
// } );

async function mongoDBConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/students_database");
    console.log("Connection is successful");
  } catch (error) {
    console.log(error);
  }
}
mongoDBConnection();

// Defining Schema
const studentSchema = new mongoose.Schema(
  {
    rollNo: { type: Number },
    name: { type: String },
    city: { type: String },
    graduation: { type: String },
  },
  { collection: "students_collection" }
);
// Create the Model - Student
const Student = mongoose.model("Student", studentSchema);

app.get("/allStudents", async (request, response) => {
  console.log("Fetching students from mongodb... ");
  console.log(`Request path: ${request.url}`);
  // Fetch all students using fetch({})
  const studentsList = await Student.find({});
  return response.status(200).json(studentsList);
});
