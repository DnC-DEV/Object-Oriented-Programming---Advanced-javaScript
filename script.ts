class Patinete {
    public guidao: boolean;
    public rodas: boolean;
    public altura: number;
    }

    const patinete = new Patinete();

    console.log('Class Patinete: ');
        
        const guidao = patinete.guidao = true;
        const rodas = patinete.rodas = true;
        const altura = patinete.altura = 1.3;

        console.log(`O patinete tem guião? ${guidao}`);
        console.log(`O patinete tem rodas? ${rodas}`);
        console.log(`A altura do patinete é: ${altura}`);