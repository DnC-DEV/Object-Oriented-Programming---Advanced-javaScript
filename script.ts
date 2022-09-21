/*Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
class Patinete {
    public roda: boolean;
    public guidao: boolean;
    public tamanho: number;

}

    const patinete = new Patinete();

    console.log('Class Patinete: ');
        
        const roda = patinete.roda = true;
        const guidao = patinete.guidao = true;
        const tamanho = patinete.tamanho = 1.30;

        console.log(`O patinete tem rodas? ${roda}`);
        console.log(`O patinete tem guidão? ${guidao}`);
        console.log(`O temanho do patinete é: ${tamanho} mts`);