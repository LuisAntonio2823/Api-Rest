"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = require("./Infraestructura/Routes");
async function startServer() {
    const app = (0, express_1.default)();
    const port = 3000;
    // Express middleware
    app.use(express_1.default.json());
    // Routes
    app.use("/comics", router);
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
startServer().catch((error) => console.error('Error starting server:', error));
