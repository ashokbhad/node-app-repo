const { error } = require("console");
const fs = require("fs");
const FilePath = "output.txt";
fs.stat(FilePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file size:", stats.size + "bytes");
  console.log("is a file:", stats.isFile());
  console.log("is a directory:", stats.isDirectory());
  console.log("File birthtime (creation time):", stats.birthtime);
  console.log("file modification time:", stats.mtime);
});
