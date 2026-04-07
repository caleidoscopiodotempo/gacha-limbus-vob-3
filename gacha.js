function gerarPull(qtd) {


    const pool = [
{
    nome: "Kurokumo Junior Doujima Shun",
    raridade: 1,
    descricao: "Disciplina. Silêncio. Repetição. Ainda não é o bastante... mas chegará lá. Precisa chegar."
},


{
    nome: "Section 6 Intern Doujima Shun",
    raridade: 2,
    descricao: "Não faço perguntas desnecessárias. Apenas sigo instruções."
},


{
    nome: "Blade Lineage Executor Shiki Tohno",
    raridade: 3,
    descricao: "Uma lâmina não hesita. Uma lâmina não tem voz. Uma lâmina só precisa ser capaz de refletir seu alvo uma última vez."
},


{
    nome: "Seven Assoc. South Section Aramis, Athos & Porthos",
    raridade: 1,
    descricao: "Um sorriso, uma piada... e talvez algo mais. Depende do quanto você pagar."
},


{
    nome: "Cinq Assoc. South Section Aramis, Athos & Porthos",
    raridade: 2,
    descricao: "O espetáculo continua. Sempre continua. Mesmo quando ninguém está assistindo."
},


{
    nome: "Zwei Association South Section 6 Doujima Shun",
    raridade: 1,
    descricao: "Postura firme. Proteção básica. Ainda há muito a aprender."
},


{
    nome: "Zwei Association South Section 3 Doujima Shun",
    raridade: 2,
    descricao: "Defesa antes de tudo. Manter a linha de frente é prioridade. Não me dirija a palavra."
},




{
    nome: "Shi Association South Section 5 Aramis, Athos & Porthos",
    raridade: 1,
    descricao: "Contratos simples, riscos simples. Ou pelo menos deveriam ser.~"
},


{
    nome: "Lobotomy Corporation Employee Jonas & Lucas",
    raridade: 1,
    descricao: "Mais um dia de trabalho. Nada fora do comum... O Lucas esqueceu meu caderno no Departamento de Segurança de novo???"
},


{
    nome: "Lobotomy Corporation Control Team Shiki Tohno",
    raridade: 2,
    descricao: "Monitoramento constante. Tudo parece... sob controle."
},


{
    nome: "Kurokumo Clan Wakashu Laura",
    raridade: 2,
    descricao: "Cuidado... algumas flores só parecem bonitas à distância.~"
},






{
    nome: "Liu Association South Section 3 Laura",
    raridade: 2,
    descricao: "Chamas controladas... Emoções também deveriam ser. Não concorda?"
},


{
    nome: "R Corp 4th Pack Reindeer Aegis",
    raridade: 2,
    descricao: "Eficiência otimizada. Execução direta."
},


{
    nome: "Seven Association South Section 1 Loreto",
    raridade: 3,
    descricao: "A verdade está sempre lá, não está...? Basta saber onde olhar.. haah... Isso é algo que você diria."
},


{
    nome: "Tingtang Gang Member Jonas & Lucas",
    raridade: 1,
    descricao: "—Trabalho básico.\n—Nada complicado.\n—Por enquanto."
},


{
    nome: "Tingtang Gang Enforcer Jonas & Lucas",
    raridade: 2,
    descricao: "—Você fala.\n—Eu resolvo.\n—Simples assim. Se você me atrapalhar de novo, você vai torcer para que eu não te encontre."
},


    ]
    const resultados = [];


    for (let i = 0; i < qtd; i++) {
        let roll = Math.random();


        if (roll < 0.05)
            resultados.push(pool[0]);
        else if (roll < 0.30)
            resultados.push(pool[1]);
        else
            resultados.push(pool[2]);
    }


    return resultados;
}
