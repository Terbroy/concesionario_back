const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister} = require("../controllers");

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       description: Este es un ejemplo de los datos que debes colocar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
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
 *                     $ref: "#/components/schemas/users"
 */


router.post("/users", userRegister); 

module.exports = router;