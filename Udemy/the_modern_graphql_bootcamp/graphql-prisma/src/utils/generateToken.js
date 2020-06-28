import jwt from 'jsonwebtoken'

const generateToken = () => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7 days' })
}

export default generateToken