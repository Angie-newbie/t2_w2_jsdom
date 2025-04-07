// lets say we got this array from an api request
const data = [
    'Frankenstein',
    'Dracula',
    'Freddie',
    'Jason',
    'Ghost Face'
]

function addCostumeToList() {
    const ul = document.querySelector('#costumeContainer ul')
    // create an <li> using costume
    const newLi = document.createElement('li')
    // set the child text of the new li to the value of costume
    newLi.innerText = costume

    //Create a button for removing the item
    const removeButton = document.createElement('button')
    //set the button caption
    removeButton.innerText = `Remove ${costume}`
    // Attach a chick listener
    removeButton.addEventListener ('click', () => {
        ul.removeChild(newLi)

    })

    //Append the button
    newLi.appendChild(removeButton)

    // Insert element into the DOM
    ul.appendChild(newLi)

}





//Ilterate over data
for (costume of data) {
    // ul.innerHTML += `
    //     <li>
    //         ${costume}
    //         <button>Remove ${costume} </button>
    //     </li>
    //     `
    


}

//listen for form submit
document.querySelector(`#newCostumeForm`).addEventListener('submit', (event) => {

    event.preventDefault()
    console.log('Form submit')

})