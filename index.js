/* Enter the code to remove the main node element under this comment */
const main = document.querySelector('main')
main.remove()
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1').setAttribute('id', 'victory')
newHeader.innerText = "Carla is a cool person"
document.body.appendChild("h1")


// for (let i = 0; i < 3; i++) {
//   let victory = 
//   document.createElement('victory')
//   victory.innerHTML = (i + 1).toString()
//   newHeader.appendChile(victory)
// }
