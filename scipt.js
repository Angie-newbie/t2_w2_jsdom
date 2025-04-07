// lets say we got this array from an api request
const data = [
    'Frankenstein',
    'Dracula',
    'Freddie',
    'Jason',
    'Ghost Face'
]

function addCostumeToList(costume) {
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
for (let costume of data) {
    // ul.innerHTML += `
    //     <li>
    //         ${costume}
    //         <button>Remove ${costume} </button>
    //     </li>
    //     `
    addCostumeToList(costume)
    


}

//listen for form submit
document.querySelector(`#newCostumeForm`).addEventListener('submit', (event) => {

    event.preventDefault()
    // Get costume from form input
    const newCostumeInput = document.querySelector(`#newCostumeForm input`)
    const costume = newCostumeInput.value
    // Add the new costume to the list
    addCostumeToList(costume)
    newCostumeInput.value = ''

})