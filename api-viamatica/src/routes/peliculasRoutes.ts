import { Router } from 'express';
import { getPeliculasController, getPeliculasCountController, getPeliculaByIdController, createPeliculaController, updatePeliculaController, deletePeliculaController } from '../controllers/peliculasController';
import { createPeliculaSalaController,getPeliculaByNombreSalaIDController, getPeliculaByFechaController, getStatusSalaController } from '../controllers/peliculaSalaController';
const router = Router();

/**
 * @swagger
 * /peliculas:
 *   get:
 *     summary: Obtiene todas las películas
 *     responses:
 *       200:
 *         description: Lista de todas las películas
 */
router.get('/peliculas', getPeliculasController);


/**
 * @swagger
 * /peliculas:
 *   get:
 *     summary: Obtiene todas la cantidad de peliculas
 *     responses:
 *       200:
 *         description: Cantidad de peliculas
 */
router.get('/countpeliculas', getPeliculasCountController);

/**
 * @swagger
 * /peliculas/{id}:
 *   get:
 *     summary: Obtiene una película por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película encontrada
 *       404:
 *         description: Película no encontrada
 */
router.get('/peliculas/:id', getPeliculaByIdController);

/**
 * @swagger
 * /peliculas:
 *   post:
 *     summary: Crea una nueva película
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               duracion:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Película creada
 */
router.post('/peliculas', createPeliculaController);

/**
 * @swagger
 * /peliculas/{id}:
 *   put:
 *     summary: Actualiza una película por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               duracion:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Película actualizada
 *       404:
 *         description: Película no encontrada
 */
router.put('/peliculas/:id', updatePeliculaController);

/**
 * @swagger
 * /peliculas/{id}:
 *   delete:
 *     summary: Elimina una película por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película eliminada
 *       404:
 *         description: Película no encontrada
 */
router.delete('/peliculas/:id', deletePeliculaController);

/**
 * @swagger
 * /peliculas/buscar/{nombrePelicula}/{salaID}:
 *   get:
 *     summary: Busca una película por nombre y sala ID
 *     parameters:
 *       - in: path
 *         name: nombrePelicula
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la película
 *       - in: path
 *         name: salaID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sala
 *     responses:
 *       200:
 *         description: Película encontrada
 *       404:
 *         description: Película no encontrada
 */
router.get('/peliculas/buscar/:nombrePelicula/:salaID', getPeliculaByNombreSalaIDController);

/**
 * @swagger
 * /peliculas/fecha/{fecha_publicacion}:
 *   get:
 *     summary: Busca películas por fecha de publicación
 *     parameters:
 *       - in: path
 *         name: fecha_publicacion
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de publicación de la película
 *     responses:
 *       200:
 *         description: Lista de películas encontradas
 */
router.get('/peliculas/fecha/:fecha_publicacion', getPeliculaByFechaController);

/**
 * @swagger
 * /salas/buscar:
 *   get:
 *     summary: Obtiene el estado de una sala por su nombre
 *     parameters:
 *       - in: query
 *         name: NombreSala
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la sala
 *     responses:
 *       200:
 *         description: Estado de la sala
 *       404:
 *         description: Sala no encontrada
 */
router.get('/salas/buscar', getStatusSalaController);

/**
 * @swagger
 * /peliculas/sala:
 *   post:
 *     summary: Crea una nueva entrada en PeliculaSala
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_pelicula:
 *                 type: integer
 *               id_sala_cine:
 *                 type: integer
 *               fecha_publicacion:
 *                 type: string
 *                 format: date
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Entrada de PeliculaSala creada
 */
router.post('/createPeliculaSala', createPeliculaSalaController);

export default router;