import express from 'express';
import { assertRouter } from './assertRouter';
import { clientRouter } from './clientRouter';
import { accessRouter } from './accessRouter';
import { investimentRouter } from './investmentRouter';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';
import { validateMiddleware } from '../Middlewares/validate.middleware';
import { investimentSchema } from '../Middlewares/schemes';

const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: Endpoint de ativos 
 */

/**
 * @swagger
 *  components:
 *    schemas: 
 *      Ativos:
 *        type: object
 *        required:
 *          - codAtivo
 *          - NomeAtivo
 *          - QtdeAtivo
 *          - Valor
 *        properties:
 *          codAtivo:
 *            type: number
 *          NomeAtivo:
 *            type: string
 *          QtdeAtivo:
 *            type: number
 *          Valor:
 *            type: number
 */

/**
 * @swagger
 *  components:
 *    schemas: 
 *      Users:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 */

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Ativos]
 *      description: 'Endpoint trás todos os ativos do banco de dados'
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Ativos"     
 */

/**
 * @swagger
 *  /ativos/{codAtivo}:
 *    get:
 *      tags: [Ativos]
 *      description: 'Endpoint trás somente um ativo do banco de dados'
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: codAtivo
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: "#/components/schemas/Ativos"     
 */

/**
 * @swagger
 *  /acessar/login:
 *    post:
 *      tags: [Users]
 *      description: 'Endpoint que efetua o login do usuário'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Users"
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: "#/components/schemas/Ativos"    
 */

router.use('/acessar', accessRouter); // Ok
router.use('/ativos', assertRouter); // OK
router.use('/cliente', authenticateMiddleware, clientRouter); // OK
router.use(
  '/investimentos',
  authenticateMiddleware,
  validateMiddleware(investimentSchema),
  investimentRouter
);

export { router };
