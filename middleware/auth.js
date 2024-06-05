// middleware/auth.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret'


async function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if (token) {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        req.user = decodedToken;
        next();
    } else {
        res.status(401).json({message: "Unauthorized"})
    }
}

module.exports = authenticate;