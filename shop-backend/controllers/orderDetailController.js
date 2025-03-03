import { Sequelize } from "sequelize";
const { Op } = Sequelize;
import db from "../models/index.js";

export const getOrderDetails = async (req, res) => {
    const orderDetails = await db.OrderDetail.findAll();
    return res.status(200).json({ message: "Lấy danh sách chi tiết đơn hàng thành công", data: orderDetails });
};

export const getOrderDetailById = async (req, res) => {
    const { id } = req.params;
    const orderDetail = await db.OrderDetail.findByPk(id);
    if (!orderDetail) {
        return res.status(404).json({ message: "Chi tiết đơn hàng không tìm thấy" });
    }
    return res.status(200).json({ message: "Lấy thông tin chi tiết đơn hàng thành công", data: orderDetail });
};

export const insertOrderDetail = async (req, res) => {
    const orderDetail = await db.OrderDetail.create(req.body);
    return res.status(201).json({ message: "Thêm chi tiết đơn hàng thành công", data: orderDetail });
};

export const updateOrderDetail = async (req, res) => {
    const { id } = req.params;
    await db.OrderDetail.update(req.body, { where: { id } });
    return res.status(200).json({ message: "Cập nhật chi tiết đơn hàng thành công" });
};

export const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    await db.OrderDetail.destroy({ where: { id } });
    return res.status(200).json({ message: "Xoá chi tiết đơn hàng thành công" });
};
