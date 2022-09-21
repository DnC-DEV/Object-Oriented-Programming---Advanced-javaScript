/*Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, 
defina as instâncias deste objeto e apresente as informações deste objeto no console.*/

class ContaBancaria {
    public nome: string;
    public numeroDaConta: number;
    public senha: number;
    }

    const contaBancaria = new ContaBancaria();

    console.log('Class Conta Bancaria: ');
        
        const nome = contaBancaria.nome = 'Daniel Corrêa';
        const numeroDaConta = contaBancaria.numeroDaConta = 92843;
        const senha = contaBancaria.senha = 312298;

        console.log(`O nome do cliente é: ${nome}`);
        console.log(`O numero da conta é: ${numeroDaConta}`);
        console.log(`A senha desta conta é: ${senha}`);
