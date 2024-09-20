const { error } = require("console");
const fs = require("fs");
const FilePath = "sample-data.txt";
fs.unlink(FilePath, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been deleted");
});
