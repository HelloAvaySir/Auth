import jwt from "jsonwebtoken";

// Middleware to verify token
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access token is missing" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};

// Middleware to verify user (either 'user' or 'admin' role)
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === "user" || req.user.role === "admin") {
            next();
        } else {
            return res.status(403).json({ message: "You are not authorized" });
        }
    });
};

// Middleware to verify admin only
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === "admin") {
            next();
        } else {
            return res.status(403).json({ message: "You are not authorized as admin" });
        }
    });
};
