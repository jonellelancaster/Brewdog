const ulPlacement = document.getElementById("beerList");
const ulContainer = document.createElement("ulContainer");
ulContainer.classList.add("ulContainer");
ulPlacement.appendChild(ulContainer);





fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                data.forEach(beer => {

                    const beerName = document.createElement("li");
                    beerName.classList.add("beerName");
                    const beerContainer = document.createElement("beerContainer");
                    beerName.textContent = beer.name;
                    beerContainer.classList.add("beerContainer");

                    //wrapper
                    const wrapper = document.createElement("div");
                    wrapper.classList.add("wrapper");


                    const button = document.createElement("button");
                    button.classList.add("button");
                    button.textContent = "X";

                    //beerDescription
                    const beerDescription = document.createElement("p");
                    beerDescription.classList.add("beerDescription");
                    beerDescription.textContent = beer.description;

                    //img
                    const img = document.createElement("img");
                    img.classList.add("beerImg");
                    img.setAttribute("src", beer.image_url);
                    img.setAttribute("alt", beer.name);

                    beerName.onclick = function (e) {
                        /**
                         * This is all that should happen onclick
                         */
                        wrapper.appendChild(beerContainer);
                        beerContainer.appendChild(button);
                        beerContainer.appendChild(beerDescription);
                        beerContainer.appendChild(img);

                        button.onclick = e => {
                            // Instead of toggling, remove the created element
                            const parent = e.target.parentElement;
                            parent.remove();
                        };
                    };

                    ulPlacement.appendChild(beerName);
                    ulContainer.appendChild(beerName);
                    ulContainer.appendChild(wrapper);
                });

                console.log(data);
                
            });





        })


.catch(function (err) {
    console.log('Fetch Error :-S', err);
});





