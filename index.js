import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const date = new Date();
const year = date.getFullYear();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://rittiko.github.io/my.data.json/resumeData.json");
    const data = response.data; 
    console.log(data);

    res.render("index.ejs", { data: data, year: year }); 
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
