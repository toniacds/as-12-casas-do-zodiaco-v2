
function descobrirCDZ(){

    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const dia = document.querySelector("#dia").value;
    const mes = document.querySelector("#mes").value;
    const data = "2023" + "/" + mes + "/" + dia;
    
    // Para a comparação de datas, deve-se levar em consideração a sequência aceita no JS para datas: ANO/MÊS/DIA.
    // Dica: é possível concaternar informações em constantes utilizando o NOME_DA_CONSTANTE = CONST1 + CONST2.

if (data >= '2023/05/21' && data  <= '2023/06/21') {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","150px");
        texto2.innerHTML ="Saga de Gêmeos é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX.";
    }
else if (data >= '2023/03/21' && data  <= '2023/04/20') {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML ="Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. ";
    }
else if (data >= '2023/04/21' && data  <= '2023/05/20') {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML ="Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. ";
    }
else if (data >= '2023/06/21' && data  <= '2023/07/20') {
    texto.innerHTML = "Câncer";
    imagem.setAttribute("src","img/Câncer.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="yansā no Desumasuku é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
}
else if (data >= '2023/07/22' && data  <= '2023/08/22') {
    texto.innerHTML = "Leão";
    imagem.setAttribute("src","img/leão.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML ="Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. ";
}
else if (data >= '2023/03/23' && data  <= '2023/09/22') {
    texto.innerHTML = "Virgem";
    imagem.setAttribute("src","img/Virgem.webp");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="Shaka de Virgem (乙女座バルゴのシャカ Barugo no Shaka?) é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.";
}
else if (data >= '2023/09/23' && data  <= '2023/10/22') {
    texto.innerHTML = "Libra";
    imagem.setAttribute("src","img/libra.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="Dohko de Libra (天秤座の童虎, Raibura no Dōko?) fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. ";
}
else if (data >= '2023/10/23' && data  <= '2023/11/21') {
    texto.innerHTML = "Escorpião";
    imagem.setAttribute("src","img/escorpião.webp");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="Milo de Escorpião (蠍座のミロ Sukōpion no Miro) foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. ";
}
else if (data >= '2023/11/22' && data  <= '2023/12/21') {
    texto.innerHTML = "Sagitário";
    imagem.setAttribute("src","img/sagitario.webp");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos – emprestou-a a Seiya durante a luta contra Poseidon, por exemplo.";
}
else if (data >= '2023/12/22' && data  <= '2023/01/20') {
    texto.innerHTML = "Capricornio";
    imagem.setAttribute("src","img/Capricornio.webp");
        imagem.setAttribute("width","300px");
        texto2.innerHTML ="Shura de Capricórnio (山羊座のシュラ Kapurikōn no Shura?) é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. ";
}

else if (data >= '2023/02/20' && data  <= '2023/03/20') {
    texto.innerHTML = "Peixes";
    imagem.setAttribute("src","img/peixes.webp");
    imagem.setAttribute("width","300px");
    texto2.innerHTML ="Afrodite de Peixes (魚座ピスケスのアフロディーテ Pisukesu no Afurodite?) é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. ";
}
 else {
        texto.innerHTML = "Deu ruim... =(";
}
}