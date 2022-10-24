let charactersList = document.querySelector('.characters-list')
let charactersDisplay = document.querySelector('.characters-display')
let info = document.querySelector('.header-info')

let fighters = ['mario', 'link', 'samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi', 'ness', 'jigglypuff', 'peach', 'daisy', 'bowser','sheik', 'zelda',  'falco', 'marth', 'mewtwo', 'roy', 'sonic', 'robin', 'joker', 'kazuya', 'inkling']

let fighter = fighters.map((element, index) => {

        let image = document.createElement('img')
        let number = document.createElement('h2')
        let name = document.createElement('h2')
        let card = document.createElement('div')
    
        image.className = 'fighter-image'
        number.className = 'fighter-name'
        name.className = 'fighter-name'
        card.className = 'fighter-card'
    
        image.src = `https://www.smashbros.com/assets_v2/img/fighter/thumb_h/${element}.png`
        name.innerHTML = element.toUpperCase()
        number.innerHTML= `${index+1}`
        card.append(number,name,image)
    
        charactersDisplay.append(card) 

})

