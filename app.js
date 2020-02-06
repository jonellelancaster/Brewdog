const ulPlacement = document.getElementById('beerList')
const ulContainer = document.createElement('ulContainer')
ulContainer.setAttribute('class', 'ulContainer')
ulPlacement.appendChild(ulContainer)



const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        data.forEach(beer => {


            const beerName = document.createElement('li')
            beerName.setAttribute('class', 'beerName')
            const beerContainer = document.createElement('beerContainer')
            beerName.textContent = beer.name
            beerContainer.setAttribute('class', 'beerContainer')


            //wrapper
            const wrapper = document.createElement('div')
            wrapper.setAttribute('class', 'wrapper')

            beerName.addEventListener('click', function (e) {
                
                const button= document.createElement('button')
                button.setAttribute('class', 'button')
                button.innerHTML="X"
                
                
                
                //    console.log(beer.description)
                const beerDescription = document.createElement('p')
                beerDescription.setAttribute('class', 'beerDescription')
                beerDescription.textContent = beer.description
                
                //    console.log(beer.image_url)
                const img = document.createElement('img')
                img.setAttribute('class', 'beerImg')
                img.setAttribute('src', beer.image_url)
                img.setAttribute('alt', beer.name)
                
                wrapper.appendChild(beerContainer)
                beerContainer.appendChild(button)
                beerContainer.appendChild(beerDescription)
                beerContainer.appendChild(img)
                
                button.addEventListener('click', function(e){
                   const element = document.querySelector('.beerContainer')
                   element.classList.toggle('beerContainer__hide')
                })
        })
        
        ulPlacement.appendChild(beerName)
        ulContainer.appendChild(beerName)
            ulContainer.appendChild(wrapper)
            

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