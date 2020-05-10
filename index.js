const URL_TO_FETCH = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
let placesArray = [];
fetch(URL_TO_FETCH, {
    method: 'get'
})
    .then((response) => {
        response.json().then((data) => {
            populatePage(data)
        });
    })
    .catch((err) => { console.error(err); });

const populatePage = (data) => {
    for (var i = 0; i < data.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = data[i].photo;
        img.classList.add("img-place");
        card.appendChild(img);
        const container = document.createElement("div")
        container.classList.add("container");
        card.appendChild(container);
        const h4 = document.createElement("h4");
        h4.innerHTML = data[i].name;
        container.appendChild(h4);
        const p = document.createElement("p");
        p.innerHTML = `Preço: R$${data[i].price}`;
        container.appendChild(p);
        document.getElementById("cards-container").appendChild(card);
    }
};

{/* <div class="card">
                <img src="img_avatar.png" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div> */}