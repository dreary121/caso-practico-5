// Función para obtener los datos de las citas de Los Simpsons
function getSimpsonsQuotes(count, done) {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error("Error al obtener los datos de las citas de Los Simpsons:", error);
        });
}

// Función para mostrar las citas, las imágenes y los nombres de los personajes en el HTML
function showSimpsonsQuotes(quotesList) {
    quotesList.forEach(quote => {
        const characterImage = quote.image;
        const characterName = quote.character;

        // Crear un elemento de artículo para mostrar la cita, la imagen y el nombre del personaje
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="image-container">
                <img src="${characterImage}" alt="${characterName}">
            </div>
            <h3>${characterName}</h3>
        `;

        // Agregar el artículo al elemento principal
        const main = document.querySelector("main");
        main.appendChild(article);
    });
}

// Obtener datos de las citas de Los Simpsons y mostrarlas en el HTML
const numberOfQuotes = 10; // Cambia esto al número de citas que desees mostrar (en este caso, 10 personajes)
getSimpsonsQuotes(numberOfQuotes, showSimpsonsQuotes);
