import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await db.User.create({ name, email, password: hashedPassword });
        return res.status(201).json({ message: "Đăng ký thành công", data: user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await db.User.findOne({ where: { name } });
        if (!user) {
            return res.status(401).json({ message: "Tài khoản không tồn tại" });
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(401).json({ message: "Mật khẩu không đúng" });
        // }

        // So sánh mật khẩu trực tiếp (Không dùng bcrypt)
        if (password !== user.password) {
            return res.status(401).json({ message: "Mật khẩu không đúng" });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", { expiresIn: "1h" });

        return res.status(200).json({ message: "Đăng nhập thành công", token, data: user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
