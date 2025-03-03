import { Sequelize } from "sequelize";
const { Op } = Sequelize;
import db from "../models/index.js";

export const getOrders = async (req, res) => {
    const orders = await db.Order.findAll();
    return res.status(200).json({ message: "Lấy danh sách đơn hàng thành công", data: orders });
};

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    const order = await db.Order.findByPk(id);
    if (!order) {
        return res.status(404).json({ message: "Đơn hàng không tìm thấy" });
    }
    return res.status(200).json({ message: "Lấy thông tin đơn hàng thành công", data: order });
};

export const insertOrder = async (req, res) => {
    const order = await db.Order.create(req.body);
    return res.status(201).json({ message: "Thêm đơn hàng thành công", data: order });
};

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    await db.Order.update(req.body, { where: { id } });
    return res.status(200).json({ message: "Cập nhật đơn hàng thành công" });
};

export const deleteOrder = async (req, res) => {
    const { id } = req.params;
    await db.Order.destroy({ where: { id } });
    return res.status(200).json({ message: "Xoá đơn hàng thành công" });
};
