class Paciente {
    public nome: string;
    public numeroDoPaciente: number;
    public numeroDoQuarto: number;
    }

    const pacinete = new Paciente();

    console.log('Class Paciente: ');
        
        const nome = pacinete.nome = 'Daniel Corrêa';
        const numeroDoPaciente = pacinete.numeroDoPaciente = 155;
        const numeroDoQuarto = pacinete.numeroDoQuarto = 3;

        console.log(`O nome do paciente é: ${nome}`);
        console.log(`O numero do paciente é: ${numeroDoPaciente}`);
        console.log(`O numero do quarto do paciente é: ${numeroDoQuarto}`);