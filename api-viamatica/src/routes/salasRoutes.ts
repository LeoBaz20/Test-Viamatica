import { Router } from 'express';
import { getSalasController, getSalasCountController, getSalaByIdController, createSalaController, updateSalaController, deleteSalaController } from '../controllers/SalaController';
import { getSalasDisponiblesController } from '../controllers/peliculaSalaController';
const router = Router();



/**
 * @swagger
 * /salas:
 *   get:
 *     summary: Obtiene todas las salas
 *     responses:
 *       200:
 *         description: Todas las salas
 */
router.get('/salas', getSalasController);

/**
 * @swagger
 * /salas-disponibles:
 *   get:
 *     summary: Obtiene todas las salas disponibles
 *     parameters:
 *       - in: query
 *         name: countOnly
 *         schema:
 *           type: boolean
 *         description: Si es true, devuelve solo la cantidad de salas disponibles
 *     responses:
 *       200:
 *         description: Todas las salas disponibles o la cantidad de salas disponibles
 */
router.get('/salas-disponibles', getSalasDisponiblesController);

/**
 * @swagger
 * /salas:
 *   get:
 *     summary: Obtiene toda la cantidad de salas
 *     responses:
 *       200:
 *         description: Cantidad de salas
 */
router.get('/countsalas', getSalasCountController);

/**
 * @swagger
 * /salas:
 *   post:
 *     summary: Crea una nueva sala
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sala creada
 */
router.post('/salas', createSalaController);

/**
 * @swagger
 * /salas/{id}:
 *   put:
 *     summary: Actualiza una sala por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sala
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sala actualizada
 *       404:
 *         description: Sala no encontrada
 */
router.put('/salas/:id', updateSalaController);

export default router;