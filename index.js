const user = [
    { id: 1, name: 'moe', slot: first },
    { id: 2, name: 'larry', slot: 'second' },
    { id: 3, name: 'curly', slot: 'third' },
    { id: 4, name: 'lucy', slot: 'third', selected: true },
]

// console.log('hi')

const lists = document.querySelector('#lists')

lists.addEventListener('click', (ev) => {
    // console.log(ev.target.tagName)
    const target = ev.target
    if (ev.target.tagName === 'LI' && ev.target.className === 'unselected') {
        target.className = 'selected'
    } else if (
        ev.target.tagName === 'LI' &&
        ev.target.className === 'selected'
    ) {
        target.className = 'unselected'
    }
})

const leftButton = document.querySelector('.buttons')
const ul1 = document.querySelector('#firstList')
const ul2 = document.querySelector('#secondList')
const ul3 = document.querySelector('#thirdList')

lists.addEventListener('click', (ev) => {
    const elementsMoved = [...document.querySelectorAll('.selected')]

    elementsMoved.forEach((element) => {
        //how do you know if element is in specific list?
        //if element not within node list skip removing and adding

        if (
            ev.target.tagName === 'BUTTON' &&
            ev.target.id === 'thirdLeft' &&
            element.parentNode.id === 'thirdList'
        ) {
            ul3.removeChild(element)
            ul2.appendChild(element)
        } else if (
            ev.target.tagName === 'BUTTON' &&
            ev.target.id === 'secondRight' &&
            element.parentNode.id === 'secondList'
        ) {
            ul2.removeChild(element)
            ul3.appendChild(element)
        } else if (
            ev.target.tagName === 'BUTTON' &&
            ev.target.id === 'secondLeft' &&
            element.parentNode.id === 'secondList'
        ) {
            ul2.removeChild(element)
            ul1.appendChild(element)
        } else if (
            ev.target.tagName === 'BUTTON' &&
            ev.target.id === 'firstRight' &&
            element.parentNode.id === 'firstList'
        ) {
            ul1.removeChild(element)
            ul2.appendChild(element)
        }
    })
})
