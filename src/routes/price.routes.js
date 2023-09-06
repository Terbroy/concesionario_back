const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require("../controllers");

/**
 * @openapi
 * /api/v1/price:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lee todos los elementos de la tabla price
 *     tags: [Price]
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
 *                     $ref: "#/components/schemas/price"
 * 
 *   post: 
 *     security:
 *       - bearerAuth: []
 *     summary: Crea un nuevo elemento en price
 *     tags: [Price]
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createPrice"
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
 *                     $ref: "#/components/schemas/price"
 * 
 * /api/v1/price/{id}:
 *   
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lee los datos un elemento de la tabla price
 *     tags: [Price]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: price Id
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
 *                     $ref: "#/components/schemas/price" 
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Actualiza los datos de un elemento de la tabla price
 *     tags: [Price]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: price Id
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createPrice"
 *     responses:
 *       200:
 *         description: Este es el resultado al actualizar los datos
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
 *                     $ref: "#/components/schemas/price" 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Elimina un elemento de la tabla price
 *     tags: [Price]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: price Id
 *     responses:
 *       200:
 *         description: Este es el resultado al eliminar un elemento
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
 *                     $ref: "#/components/schemas/deletePrice"
 *      
 */

router.get("/price",  authenticate, getPrices);
router.get("/price/:id", authenticate, getPrice);
router.post("/price", authenticate, createPrice);
router.patch("/price/:id", authenticate, updatePrice);
router.delete("/price/:id", authenticate, deletePrice);

module.exports = router;