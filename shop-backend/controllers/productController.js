import { Sequelize } from "sequelize";
const { Op } = Sequelize;
import db from "../models/index.js";

export const getProducts = async (req, res) => {
    const products = await db.Product.findAll();
    return res.status(200).json({ message: "Lấy danh sách sản phẩm thành công", data: products });
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await db.Product.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: "Sản phẩm không tìm thấy" });
    }
    return res.status(200).json({ message: "Lấy thông tin sản phẩm thành công", data: product });
};

export const insertProduct = async (req, res) => {
    const product = await db.Product.create(req.body);
    return res.status(201).json({ message: "Thêm sản phẩm thành công", data: product });
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    await db.Product.update(req.body, { where: { id } });
    return res.status(200).json({ message: "Cập nhật sản phẩm thành công" });
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await db.Product.destroy({ where: { id } });
    return res.status(200).json({ message: "Xoá sản phẩm thành công" });
};
