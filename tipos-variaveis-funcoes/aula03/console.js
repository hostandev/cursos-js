/**
 * Console utilizado para testar saídas durante a fase de 
 * debug e desenvolvimento.
 * 
 * Exite a opção de log 
 * 
 */
const valor = true;
console.log(valor);

/**
 * e saídas durante o tratamento de erros
 */
console.error("Ocorreu um erro esperado!");

/**
 * Outros tipos de console...
 * 
 * - error, table, time, trace
 */

/**
 * característica do js é que div / 0 não dá erro.
 */
console.log(4 / 0);

/**
 * Erro lançado intencionalmente.
 */
console.log(new Error("Deu erro"));