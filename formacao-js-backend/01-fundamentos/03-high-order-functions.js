/**
 * Função: conjunto de instruções que executa uma tarefa.
 * 
 * High order functions: recebem uma ou mais funções como args, retornando
 * outra função.
 * 
 * Callback: funções que são chamadas dentro de outra função
 * 
 * Composição: pequenas funções compondo uma função maior.
 */


// callback
const mensagem = (msg) => console.log(msg); 

// high order
const login = (senha) => {
    if (senha === '123') {
        const msg = 'Acesso permitido';
        mensagem(msg);
    } else {
        const msg = 'Acesso negado';
        mensagem(msg)
    }
}

login('123');