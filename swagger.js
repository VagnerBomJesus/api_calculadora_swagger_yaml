
/**
 *  FILE SWAGGER
 *  Author: Vagner Bom Jesus
 */
/**
 * @swagger
 * /soma/{num1}/{num2}:
 *   post:
 *     tags:
 *          - SOMA
 *     description: "Escolha dois números." 
 *     parameters:
 *       - in: path
 *         name: num1
 *         default: "2"
 *         description: "Primeiro número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *       - in: path
 *         name: num2
 *         default: "2"
 *         description: "Segundo número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         name: result
 *         description: Success
 */


/**
 * @swagger
 * /sub/{num1}/{num2}:
 *   post:
 *     tags:
 *          - SUBTRAÇÃO
 *     description: "Escolha dois números." 
 *     parameters:
 *       - in: path
 *         name: num1
 *         default: "2"
 *         description: "Primeiro número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *       - in: path
 *         name: num2
 *         default: "2"
 *         description: "Segundo número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         name: result
 *         description: Success
 */


/**
 * @swagger
 * /mult/{num1}/{num2}:
 *   post:
 *     tags:
 *          - MULTIPLICAÇÃO
 *     description: "Escolha dois números." 
 *     parameters:
 *       - in: path
 *         name: num1
 *         default: "2"
 *         description: "Primeiro número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *       - in: path
 *         name: num2
 *         default: "2"
 *         description: "Segundo número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         name: result
 *         description: Success
 */


/**
 * @swagger
 * /div/{num1}/{num2}:
 *   post:
 *     tags:
 *          - DIVISÃO
 *     description: "Escolha dois números." 
 *     parameters:
 *       - in: path
 *         name: num1
 *         default: "2"
 *         description: "Primeiro número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *       - in: path
 *         name: num2
 *         default: "2"
 *         description: "Segundo número. Valor default <code> 2</code>."
 *         schema: 
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         name: result
 *         description: Success
 */
