const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).json({ message: 'Tài khoản không tồn tại' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Mật khẩu không đúng' });

        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
