require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = () => {
    try {
        const payload = { role: "user" };
        const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
        const options = { expiresIn: "1h" };
        const token = jwt.sign(payload, secret, options);
        return token;
    } catch (error) {
        console.error("Error al generar el token:", error);
        return null
    }
};

module.exports = generateToken;
