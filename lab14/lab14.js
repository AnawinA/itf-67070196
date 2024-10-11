const username = document.getElementById('username')
const input = document.getElementById('name')
const profile = document.getElementsByClassName('profile')[0]
const profileInput = document.getElementById('profile-input')


const tableInsert = document.getElementById('table-insert')
const nameInsert = document.getElementById('name-insert')
const telInsert = document.getElementById('tel-insert')

username.textContent = "Hello"

function setName() {
    username.textContent = input.value + " ok"
}
function setProfile() {
    profile.style.backgroundImage = 'url(' + profileInput.value + ')'
}

function addParagraph() {
    if (nameInsert.value && telInsert.value) {
        const newpara = document.createElement('tr')
        newpara.innerHTML = `<td></td><td>${nameInsert.value}</td><td>${telInsert.value}</td>`
        nameInsert.value = ""
        telInsert.value = ""
        tableInsert.appendChild(newpara)
    }
}
window.onload = () => {
    document.querySelectorAll('tbody tr').forEach((row) => {
        element.addEventListener('mouseup', function(event) {
            if (event.button === 1) {
              event.preventDefault()
              row.remove()
              console.log('hfidshif')
            }
        });
    })
}