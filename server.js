const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Node.js App</title>
            </head>
            <body style="font-family: Arial; text-align:center; margin-top:50px;">
                <h1>🚀 Welcome to My Node.js Application</h1>
                <p>Your Express server is running successfully!</p>
            </body>
        </html>
    `);
});

// API Route
app.get("/api", (req, res) => {
    res.json({
        message: "Hello from Node.js!",
        status: "success"
    });
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});
// Catch-all 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});