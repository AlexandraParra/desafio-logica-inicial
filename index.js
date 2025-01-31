const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nomeHeroi) {
    rl.question("Digite a quantidade de XP do herói: ", function(xpHeroi) {
        xpHeroi = parseInt(xpHeroi, 10);

        let nivel;
        if (xpHeroi < 1000) {
            nivel = "Ferro";
        } else if (xpHeroi <= 2000) {
            nivel = "Bronze";
        } else if (xpHeroi <= 5000) {
            nivel = "Prata";
        } else if (xpHeroi <= 7000) {
            nivel = "Ouro";
        } else if (xpHeroi <= 8000) {
            nivel = "Platina";
        } else if (xpHeroi <= 9000) {
            nivel = "Ascendente";
        } else if (xpHeroi <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

        rl.close();
    });
});

rl.on("close", function() {
    process.exit(0);
});
