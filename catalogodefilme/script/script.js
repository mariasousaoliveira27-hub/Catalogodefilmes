const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://www.themoviedb.org/movie/299534-avengers-endgame?language=pt-BR",
        descricao: "Ultimato",
    },
    {
        titulo: "Batman",
        imagem: "https://www.themoviedb.org/movie/155-the-dark-knight?language=pt-BR",
        descricao: "Cavaleiro das trevas",
    },
    {
        titulo: "Diário de uma Paixão", 
        imagem: "https://www.themoviedb.org/movie/11036-the-notebook?language=pt-BR",
        descricao: "Romance",
    },
    {
        titulo: "Esposa de Mentirinha",
        imagem: "https://www.themoviedb.org/movie/50546-just-go-with-it?language=pt-BR",
        descricao: "Comédia",
    },
    {
        titulo: "Gente Grande 2",
        imagem: "https://www.themoviedb.org/movie/109418-grown-ups-2?language=pt-BR",
        descricao: "Comédia",
    },
    {
        titulo: "Minha Culpa",
        imagem: "https://www.themoviedb.org/movie/1010581-culpa-mia?language=pt-BR",
        descricao: "Drama",
    }
]

const listaFilmes = document.getElementById ("listaFilmes"); 
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-fime h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</button>
                    </div>
                </div>
            </div>
        `
    })
}