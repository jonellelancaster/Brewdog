// Making an HTTP request
const ulPlacement = document.getElementById('beerList')
const ulContainer =
    document.createElement('ul')
ulContainer.setAttribute('class', 'ulContainer')


ulPlacement.appendChild(ulContainer)

const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        data.forEach(beer => {

            // console.log(beer.name) 
            const beerName = document.createElement('li')
            beerName.setAttribute('class', 'beerName')
            const h2 = document.createElement('h2')
            beerName.textContent = beer.name
            h2.setAttribute('class', 'beerContainer')

            //    console.log(beer.description)
            const beerDescription = document.createElement('p')
            beerDescription.setAttribute('class', 'beerDescription')
            beerDescription.textContent = beer.description

            //    console.log(beer.image_url)
            const img = document.createElement('img')
            img.setAttribute('class', 'beerImg')
            img.setAttribute('src', beer.image_url)
            img.setAttribute('alt', beer.name)

            ulPlacement.appendChild(beerName)
            ulContainer.appendChild(beerName)
            ulContainer.appendChild(h2)
            h2.appendChild(beerDescription)
            h2.appendChild(img)




        });
        console.log(data)
    } else if (e.target.readyState === 4) {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = `Oh No! Something went wrong!`
        ulPlacement.appendChild(errorMessage)

    }

})
request.open('GET', 'https://api.punkapi.com/v2/beers?page=2&per_page=80')
request.send()




// const filters = {
//     searchText: ''
// }
// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value

// })

// const searchRequest = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)

//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         const errorMessage = document.createElement('p')
//         errorMessage.textContent = `Oh No! Something went wrong!`
//         ulPlacement.appendChild(errorMessage)

//     }
// })
// request.open('GET', 'https://api.punkapi.com/v2/beers' + filters)
// request.send()