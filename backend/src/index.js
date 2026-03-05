require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const bookingRoutes = require("./routes/booking");

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// --- Connect to MongoDB ---
connectDB();

// --- Middleware ---
app.use(
    cors({
        origin: [FRONTEND_URL, "https://agamsiingh.ai", /\.vercel\.app$/],
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Agamsiingh.AI API is running",
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/book-consultation", bookingRoutes);

// --- 404 handler ---
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// --- Global error handler ---
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
});

// --- Start server ---
app.listen(PORT, () => {
    console.log(`🚀 Agamsiingh.AI backend running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
});
