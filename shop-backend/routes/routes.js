import express from 'express';
import * as UserController from '../controllers/userController.js';
import * as CategoryController from '../controllers/categoryController.js';
import * as ProductController from '../controllers/productController.js';
import * as OrderController from '../controllers/orderController.js';
import * as OrderDetailController from '../controllers/orderDetailController.js';
import * as FeedbackController from '../controllers/feedbackController.js';
import * as BrandController from '../controllers/brandController.js';

const router = express.Router();

// Routes cho Users
router.get('/users/GetAll', UserController.getUsers);
router.get('/users/GetById/:id', UserController.getUserById);
router.post('/users/Create', UserController.insertUser);
router.put('/users/Update/:id', UserController.updateUser);
router.delete('/users/Delete/:id', UserController.deleteUser);

// Routes cho Categories
router.get('/categories/GetAll', CategoryController.getCategories);
router.get('/categories/GetById/:id', CategoryController.getCategoryById);
router.post('/categories/Create', CategoryController.insertCategory);
router.put('/categories/Update/:id', CategoryController.updateCategory);
router.delete('/categories/Delete/:id', CategoryController.deleteCategory);

// Routes cho Products
router.get('/products/GetAll', ProductController.getProducts);
router.get('/products/GetById/:id', ProductController.getProductById);
router.post('/products/Create', ProductController.insertProduct);
router.put('/products/Update/:id', ProductController.updateProduct);
router.delete('/products/Delete/:id', ProductController.deleteProduct);

// Routes cho Orders
router.get('/orders/GetAll', OrderController.getOrders);
router.get('/orders/GetById/:id', OrderController.getOrderById);
router.post('/orders/Create', OrderController.insertOrder);
router.put('/orders/Update/:id', OrderController.updateOrder);
router.delete('/orders/Delete/:id', OrderController.deleteOrder);

// Routes cho OrderDetails
router.get('/order-details/GetAll', OrderDetailController.getOrderDetails);
router.get('/order-details/GetById/:id', OrderDetailController.getOrderDetailById);
router.post('/order-details/Create', OrderDetailController.insertOrderDetail);
router.put('/order-details/Update/:id', OrderDetailController.updateOrderDetail);
router.delete('/order-details/Delete/:id', OrderDetailController.deleteOrderDetail);

// Routes cho Feedbacks
router.get('/feedbacks/GetAll', FeedbackController.getFeedbacks);
router.get('/feedbacks/GetById/:id', FeedbackController.getFeedbackById);
router.post('/feedbacks/Create', FeedbackController.insertFeedback);
router.put('/feedbacks/Update/:id', FeedbackController.updateFeedback);
router.delete('/feedbacks/Delete/:id', FeedbackController.deleteFeedback);

// Routes cho Brands
router.get('/brands/GetAll', BrandController.getBrands);
router.get('/brands/GetById/:id', BrandController.getBrandById);
router.post('/brands/Create', BrandController.insertBrand);
router.put('/brands/Update/:id', BrandController.updateBrand);
router.delete('/brands/Delete/:id', BrandController.deleteBrand);

export default router; // ✅ Xuất mặc định theo ES Module
