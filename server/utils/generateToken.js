import jwt from "jsonwebtoken"

function generateToken(user) {
    try {
        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_KEY,
            { expiresIn: '1h' } // Optional: Add token expiry time
        );
        return token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Token generation failed');
    }
}

module.exports.generateToken = generateToken;
