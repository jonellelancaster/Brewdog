const ulPlacement = document.getElementById("beerList");
const ulContainer = document.createElement("ulContainer");
ulContainer.classList.add("ulContainer");
ulPlacement.appendChild(ulContainer);

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    data.forEach(beer => {
      const beerName = document.createElement("li");
      beerName.classList.add("beerName");
      const beerContainer = document.createElement("beerContainer");
      beerName.textContent = beer.name;
      beerContainer.classList.add("beerContainer");

      //wrapper
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");

      /**
       * You're creating multiple instances of the same elements.
       * They already exist in the DOM. All you need to do is
       * remove them and add them onclick
       */
      //button
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

      beerName.onclick = function(e) {
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
  } else if (e.target.readyState === 4) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Oh No! Something went wrong!`;
    ulPlacement.appendChild(errorMessage);
  }
});
request.open("GET", "https://api.punkapi.com/v2/beers?page=2&per_page=80");
request.send();
