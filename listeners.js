// Importar lib serialport para fazer a comunicação
const SerialPort = require('serialport');

/**
 * Uma variável de ambiente é como se fosse uma variável em um ambiente do sistema operacional, no nosso
 * caso, onde o código será executado. Elas podem ser definidas em um arquivo .env.
 * Eu defini uma lá PORT="/dev/tty", onde /dev/tty é munha porta serial de exemplo. A próxima linha vai
 * configurar essas variáveis de ambiente pra eu poder usar aqui no código.
 */
require('dotenv').config()

// Criar o objeto serialport para fazer a comunicação na porta definida pela variável de ambiente PORT
const serialport = new SerialPort(process.env.PORT);

/**
 * O objeto tem um método "on", e no caso eu defini que o gatinho é "data", um novo dado chegou.
 * O próximo parâmetro é o uma função. Em javascript "(...) => {codigo da funcao aqui}"" é um jeito de 
 * escrever uma função parecido com "function (...) {}", que também é outro jeito. O método recebe uma
 * função porque ele executa ela assim que recebo um dado novo na porta
 */
serialport.on('data', (data) => {
	// Ao receber um dado novo eu mostro ele no terminal. "console.log(...)" mostra coisas no terminal
	console.log(`Received data from ${process.env.PORT}:`, data.toString())
})

// Aqui é a mesma coisa de cima, mas pra erros
serialport.on('error', (err) => {
	console.error(`Serial port error on ${process.env.PORT}:`, err.message);
})