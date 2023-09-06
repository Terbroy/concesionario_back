const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { 
    getVehicles, 
    getVehicle, 
    createVehicle, 
    editVehicle, 
    deleteVehicle, 
    sellVehicle,
    sumVehicles,
} = require("../controllers");

/**
 * @openapi
 * /api/v1/vehicles:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Extrae todos los vehículos que hay en la tabla vehicle
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: Estos son los vehículos existentes en la tabla vehicle
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
 *                     $ref: "#/components/schemas/vehicles"
 * 
 *   post: 
 *     security:
 *       - bearerAuth: []
 *     summary: Crea un nuevo vehículo
 *     tags: [Vehicles]
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createVehicles"
 *     responses:
 *       201:
 *         description: Este estos son los datos previamente ingresados del vehículo
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
 *                     $ref: "#/components/schemas/vehicles"
 * 
 * /api/v1/vehicles/{id}:
 *   
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Extrae los datos un elemento de la tabla vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: vehicles Id
 *     responses:
 *       200:
 *         description: Estos son los datos del elemento seleccionado
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
 *                     $ref: "#/components/schemas/vehicles" 
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Actualiza los datos de un elemento de la tabla vehicles
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: vehicles Id
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/updateVehicles"
 *     responses:
 *       200:
 *         description: Estos son los datos actualizados
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
 *                     $ref: "#/components/schemas/vehicles" 
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Elimina un elemento de la tabla vehicles
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: vehicles Id
 *     responses:
 *       200:
 *         description: Elemento eliminado
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
 *                     $ref: "#/components/schemas/deleteVehicles"
 * 
 * /api/v1/vehicles/{id}/sales:
 *   post: 
 *     security:
 *       - bearerAuth: []
 *     summary: Crea un nuevo registro de venta
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: vehicles Id
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/createBuyers"
 *     responses:
 *       201:
 *         description: Estos son los datos del nuevo comprador
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
 *                     $ref: "#/components/schemas/buyers"
 * 
 * /api/v1/vehicles/sum:
 *   post: 
 *     security:
 *       - bearerAuth: []
 *     summary: Suma todos los vehiculos por tipo o modelo
 *     tags: [Vehicles]
 *     requestBody:
 *       description: Si deseas sumar por modelo en vez de por tipo modifica "tipo" a "modelo"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/realizarSuma"
 *     responses:
 *       201:
 *         description: Este es el resultado al sumar todos los elementos
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
 *                     $ref: "#/components/schemas/suma"
 *      
 */

router.get("/vehicles", authenticate, getVehicles);
router.get("/vehicles/:id", authenticate, getVehicle);
router.post("/vehicles", authenticate, createVehicle);
router.patch("/vehicles/:id", authenticate, editVehicle);
router.delete("/vehicles/:id", authenticate, deleteVehicle);
router.post("/vehicles/:id/sales", authenticate, sellVehicle);
router.post("/vehicles/sum", authenticate, sumVehicles);

module.exports = router;