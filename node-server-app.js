const http = require("http");

const httpServer = http.createServer((request, response) => {
  console.log("Received Request..");
  const url = request.url;
  console.log(`URL: ${url} `);
  switch (url) {
    case "/":
      response.end("Response from /");
      break;
    case "/home":
      response.end("Response from Home");
      break;
    case "/education":
      response.end("Response from Education");
      break;
    case "/about":
      response.end("Response from About");
      break;
    default:
      response.end("Not matching path...");
      break;
  }
});

httpServer.listen(8081, () => {
  console.log(`Server Started on port: 8081`);
});
