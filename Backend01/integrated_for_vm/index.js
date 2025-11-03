const express = require("express");
const app = express();
const classroomRoute = require("./routes/classroomRoute");
const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://10.4.84.89:${PORT}`);
});
app.use(express.json());
app.use("/api", classroomRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




