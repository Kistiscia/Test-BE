const express = require("express");
const app = express();
const classroomRoute = require("./routes/classroomRoute");

app.use(express.json());
app.use("/api", classroomRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



