import express from "express";
import morgan from "morgan";

// TODO: Setup API Endpoints

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("WIP");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
