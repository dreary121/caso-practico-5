// Función para obtener los datos de múltiples Pokémon
function getPokemonData(done) {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151"; // URL de los primeros 151 Pokémon
    fetch(url)
        .then(response => response.json())
        .then(data => {
            done(data.results); // Pasar la lista de resultados a la función de callback
        })
        .catch(error => {
            console.error("Error al obtener los datos de los Pokémon:", error);
        });
}

// Función para mostrar los Pokémon en el HTML
function showPokemonList(pokemonList) {
    pokemonList.forEach(pokemon => {
        const pokemonUrl = pokemon.url; // URL para obtener detalles del Pokémon
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(pokemonData => {
                const pokemonImage = pokemonData.sprites.front_default; // URL de la imagen del Pokémon
                const pokemonName = pokemonData.name; // Nombre del Pokémon

                // Crear un elemento de artículo para mostrar el Pokémon
                const article = document.createElement("article");
                article.innerHTML = `
                    <div class="image-container">
                        <img src="${pokemonImage}" alt="${pokemonName}">
                    </div>
                    <h3>${pokemonName}</h3>
                `;

                // Agregar el artículo al elemento principal
                const main = document.querySelector("main");
                main.appendChild(article);
            })
            .catch(error => {
                console.error("Error al obtener los datos del Pokémon:", error);
            });
    });
}

// Obtener datos de múltiples Pokémon y mostrarlos en el HTML
getPokemonData(showPokemonList);
