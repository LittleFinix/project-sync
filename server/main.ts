import * as express from "express";
import * as expressWs from "express-ws";

let app: express.Application = express();

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send(new Buffer("<html><body><script src=\"app.js\"></script></body></html>"));
});

app.use(express.static("build"));

app.listen(8000, () => console.log("Server listening on port 8000."));