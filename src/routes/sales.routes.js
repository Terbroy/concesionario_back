const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getSales, getSale, createSale, updateSale, deleteSale } = require("../controllers");

/**
 * @openapi
 * /api/v1/sales:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lee todos los elementos de la tabla sales
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Estos son los resultados al leer todos los elementos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/sales"
 * 
 *   post: 
 *     security:
 *       - bearerAuth: []
 *     summary: Crea un nuevo elemento en sales
 *     tags: [Sales]
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createsales"
 *     responses:
 *       201:
 *         description: Este es el resultado al crear un nuevo elemento
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/sales"
 * 
 * /api/v1/sales/{id}:
 *   
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lee los datos un elemento de la tabla sales
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: sales Id
 *     responses:
 *       200:
 *         description: Este es el resultado al leer el elemento
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/sales" 
 *      
 */

router.get("/sales", authenticate, getSales);
router.get("/sales/:id", authenticate, getSale);
router.post("/sales", authenticate, createSale);
router.patch("/sales/:id", authenticate, updateSale);
router.delete("/sales/:id", authenticate, deleteSale);

module.exports = router;