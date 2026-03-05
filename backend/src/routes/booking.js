const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Consultation = require("../models/Consultation");

/**
 * POST /api/book-consultation
 * Book a consultation / send contact form
 */
router.post(
    "/",
    [
        body("name").trim().notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
        body("service").trim().notEmpty().withMessage("Service is required"),
        body("message").trim().notEmpty().withMessage("Message is required"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, email, phone, service, message } = req.body;

        try {
            const consultation = new Consultation({
                name,
                email,
                phone: phone || "",
                service,
                message,
            });

            await consultation.save();

            console.log(`📩 New consultation request from ${name} (${email}) — Service: ${service}`);

            res.status(201).json({
                success: true,
                message: "Consultation request submitted successfully. We will contact you within 2 hours!",
                id: consultation._id,
            });
        } catch (err) {
            console.error("Error saving consultation:", err);
            res.status(500).json({
                success: false,
                message: "Server error. Please try again or contact us on WhatsApp.",
            });
        }
    }
);

/**
 * GET /api/book-consultation
 * Get all consultations (admin use)
 */
router.get("/", async (req, res) => {
    try {
        const consultations = await Consultation.find().sort({ createdAt: -1 });
        res.json({ success: true, count: consultations.length, data: consultations });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
