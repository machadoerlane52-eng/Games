async function buscarJogo() {
    const nome = document.getElementById("jogo").value;

    const resposta = await fetch(
        `https://api.rawg.io/api/games?key=8ef338408559403c935aeeedb78f360e&search=${nome}`
    );

    const dados = await resposta.json();
    const jogo = dados.results[0];

    const resultado = document.getElementById("resultado");

    if (!jogo) {
        resultado.innerHTML = "<h2>Jogo não encontrado.</h2>";
        return;
    }

    const generos = jogo.genres.map(g => g.name).join(", ");
    const plataformas = jogo.platforms
        .map(p => p.platform.name)
        .join(", ");

    resultado.innerHTML = `
        <h2>${jogo.name}</h2>

        <img src="${jogo.background_image}" width="300">

        <p><b>Gêneros:</b> ${generos}</p>
        <p><b>Plataformas:</b> ${plataformas}</p>
        <p><b>Lançamento:</b> ${jogo.released}</p>
        <p><b>Nota:</b> ${jogo.rating}/5</p>
    `;
}
