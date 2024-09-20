const { error } = require("console");
const fs = require("fs");
const FilePath = "output.txt";
const dataToAppend = "\n this data will be appended to the file";
fs.appendFile(FilePath, dataToAppend, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data has been appended to the file");
});
