const url = require("url");

const urlString =
  "https://example.com/student/11?name=Jenny&city=LA&pin=114456";
const parseURL = url.parse(urlString);
console.log(parseURL.protocol);
console.log(parseURL.host);
console.log(parseURL.query);
console.log(parseURL.path);
console.log(parseURL.href);
console.log(parseURL);

// const myURL = new URL("urlString")
console.log(`========= format() ================`);

const myUrl = url.format({
  protocol: "https",
  hostname: "codemindtechnology.com",
  pathname: "students/40",
});
console.log(myUrl);
