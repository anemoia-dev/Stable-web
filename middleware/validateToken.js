const jwt = require("jsonwebtoken");


const validateToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader && authorizationHeader.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({
            message: 'Unauthorized'
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'user') {
            throw new Error('Unauthorized');
        }

        next();
    }

    catch (error) {
        return new Response(JSON.stringify({
            message: 'Unauthorized'
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

module.exports = validateToken