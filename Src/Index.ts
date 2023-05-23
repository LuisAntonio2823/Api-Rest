import express from 'express';
const router = require("./Infraestructura/Routes");

async function startServer() {
  const app = express();
  const port = 3000;

 
  // Express middleware
  app.use(express.json());

  // Routes
  app.use("/comics", router);
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch((error) => console.error('Error starting server:', error));
