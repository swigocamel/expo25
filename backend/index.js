const express = require("express");
const cors = require("cors");
const { AppDataSource } = require("./data-source");
const { Pavilion } = require("./entities/Pavilion");

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // API: 取得所有館資訊
    app.get("/api/pavilions", async (req, res) => {
      const repo = AppDataSource.getRepository("Pavilion");
      const data = await repo.find();
      res.json(data);
    });

    app.listen(3000, () => {
      console.log("🚀 Server is running at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to initialize DB:", err);
  });
// This code initializes an Express server that connects to a PostgreSQL database using TypeORM.
