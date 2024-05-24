function ranqueado(vitorias, derrotas) {
    let nivelRanqueado = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        nivelRanqueado: nivelRanqueado,
        nivel: nivel
    };
}

// Exemplo de uso
let vitorias = 45;
let derrotas = 20;
let resultado = ranqueado(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.nivelRanqueado} está no nível de ${resultado.nivel}`);
