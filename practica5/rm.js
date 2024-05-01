//ricka nd morty

function getcharacter (done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getcharacter(data => {
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personajes">
            </div>
            <h3>${personaje.name}</h3>
        </article>
        `);

const mian = document.querySelector("main");

mian.append(article);
    });
});






