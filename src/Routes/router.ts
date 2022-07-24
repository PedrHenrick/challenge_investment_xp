import express from 'express';
import { assertRouter } from './assertRouter';
import { clientRouter } from './clientRouter';
import { accessRouter } from './accessRouter';
import { investimentRouter } from './investmentRouter';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';
import { validateMiddleware } from '../Middlewares/validate.middleware';
import { investimentSchema } from '../Middlewares/schemes';

const router = express.Router();

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
//// Tags:
/**
 * @swagger
 *  tags:
 *    name: Acessar
 *    description: Endpoints para efetuar o login ou cadastro na plataforma 
 */

/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: Endpoints que retorna os ativos do banco de dados 
 */

/**
 * @swagger
 *  tags:
 *    name: Cliente
 *    description: Endpoints que retorna e modifica os dados do cliente 
 */

/**
 * @swagger
 *  tags:
 *    name: Investimentos
 *    description: Endpoints onde é feita a compra e a venda dos ativos na plataforma 
 */

//// Schemas:
/**
 * @swagger
 *  components:
 *    schemas: 
 *      Login:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 *        example:
 *          email: pedro@teste.com
 *          password: senhaDeTeste123 
 */

/**
 * @swagger
 *  components:
 *    schemas: 
 *      Cadastro:
 *        type: object
 *        required:
 *          - fullName
 *          - email
 *          - password
 *        properties:
 *          fullName:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *        example:
 *          fullName: Pedro Henrick Mesquita Costa
 *          email: pedro@teste.com
 *          password: senhaDeTeste123
 */

/**
 * @swagger
 *  components:
 *    schemas: 
 *      Transacoes:
 *        type: object
 *        required:
 *          - valor
 *        properties:
 *          valor:
 *            type: number
 *        example:
 *          valor: 10000
 */

/**
 * @swagger
 *  components:
 *    schemas: 
 *      Investimentos:
 *        type: object
 *        required:
 *          - codAtivo
 *          - qtdeAtivo
 *        properties:
 *          codAtivo:
 *            type: number
 *          qtdeAtivo:
 *            type: number
 *        example:
 *          codAtivo: 11
 *          qtdeAtivo: 20
 */

//// Rotas:
/**
 * @swagger
 *  /acessar/cadastro:
 *    post:
 *      tags: [Acessar]
 *      description: 'Endpoint que efetua o cadastro do usuário'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Cadastro"
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: "#/components/schemas/Cadastro"    
 */

/**
 * @swagger
 *  /acessar/login:
 *    post:
 *      tags: [Acessar]
 *      description: 'Endpoint que efetua o login do usuário'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Login"
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: "#/components/schemas/Login"    
 */

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Ativos]
 *      description: 'Endpoint que trás todos os ativos do banco de dados'
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */

/**
 * @swagger
 *  /ativos/{codAtivo}:
 *    get:
 *      tags: [Ativos]
 *      description: 'Endpoint que trás somente um ativo do banco de dados'
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
 */

/**
 * @swagger
 *  /cliente/deposito:
 *    post:
 *      tags: [Cliente]
 *      description: 'Endpoint responsável por depositar dinheiro na conta do cliente'
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Transacoes"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                $ref: "#/components/schemas/Transacoes"     
 */

/**
 * @swagger
 *  /cliente/saldo:
 *    get:
 *      tags: [Cliente]
 *      description: 'Endpoint responsável por mostrar o saldo do cliente logado'
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 */

/**
 * @swagger
 *  /cliente/saque:
 *    post:
 *      tags: [Cliente]
 *      description: 'Endpoint responsável por sacar dinheiro da conta do cliente'
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Transacoes"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                $ref: "#/components/schemas/Transacoes"     
 */

/**
 * @swagger
 *  /cliente/ativos:
 *    get:
 *      tags: [Cliente]
 *      description: 'Endpoint responsável por mostrar todos os ativos que o cliente comprou'
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 */

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investimentos]
 *      description: 'Endpoint responsável por comprar uma quantidade de ativos'
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Investimentos"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                $ref: "#/components/schemas/Investimentos"     
 */

/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Investimentos]
 *      description: 'Endpoint responsável por vender uma quantidade de ativos compradas'
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Investimentos"
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                $ref: "#/components/schemas/Investimentos"     
 */
