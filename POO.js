/*
A entrega deste exercício consiste em:



• Crie uma classe de uma abstração; --- ok

• Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente; --- ok

• Crie pelo menos três instâncias de objetos; --- ok

• No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.  --- ok

• Envie o link do repositório através da plataforma. --- ok
*/


function Veiculo(marca, nome, combustivel, tipo) {
    this.marca = marca;
    this.nome = nome;
    this.combustivel = combustivel;
    this.tipo = tipo;

    this.ligar = function () {
        console.log('O veiculo está ligado')
    }
}

function Moto(marca, nome, combustivel, tipo, cilindradas) {
    this.cilindradas = cilindradas;
    Veiculo.call(this, marca, nome, combustivel, tipo)
}

function Carro(marca, nome, combustivel, tipo, portas) {
    this.portas = portas;
    Veiculo.call(this, marca, nome, combustivel, tipo)
}

const veiculo1 = new Veiculo('Volkswagen', 'Polo', 'Flex', 'Carro')

const moto1 = new Moto('Bajaj', 'Dominar 250', 'Flex', 'Moto')
const moto2 = new Moto('Yamaha', 'XTZ 250 Lander', 'Gasolina', 'Moto')

const carro1 = new Carro('Peugeot', '208', 'Flex', 'Carro', '4')
const carro2 = new Carro('Fiat', 'Cronos', 'Flex', 'Carro', '4')


console.log(veiculo1)

console.log(moto1)
console.log(moto2)

console.log(carro1)
console.log(carro2)

console.log('carro1:')
carro1.ligar()
console.log('=============================')

console.log('moto1:')
moto1.ligar()
console.log('=============================')

console.log('carro2:')
carro2.ligar()
console.log('=============================')

console.log('moto2:')
moto2.ligar()
console.log('=============================')



