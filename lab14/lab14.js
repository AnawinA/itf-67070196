const username = document.getElementById('username')
const input = document.getElementById('name')
const profile = document.getElementsByClassName('profile')[0]
const profileInput = document.getElementById('profile-input')


const tableInsert = document.getElementById('table-insert')
const nameInsert = document.getElementById('name-insert')
const telInsert = document.getElementById('tel-insert')


function setName() {
    username.textContent = "Hello World. " + input.value + "!"
}
function setProfile() {
    profile.style.backgroundImage = 'url(' + profileInput.value + ')'
}

setName()

function resetIndex() {
    for (let i = 0; i < tableInsert.children.length; i++) {
        tableInsert.children[i].firstChild.textContent = i + 1
    }
}

function selfRemoveRow(tr) {
    tr.firstChild.addEventListener('dblclick', (e) => {
        e.target.parentNode.remove()
        resetIndex()
    })
}

function addParagraph() {
    if (nameInsert.value && telInsert.value) {
        const newpara = document.createElement('tr')
        newpara.innerHTML = `<td>${tableInsert.children.length + 1}</td>
        <td contenteditable="true">${nameInsert.value}</td>
        <td contenteditable="true">${telInsert.value}</td>`
        selfRemoveRow(newpara)
        nameInsert.value = ""
        telInsert.value = ""
        tableInsert.appendChild(newpara)
    }
}

function saveCSV() {
    let csvContent = ""
    for (i of tableInsert.children) {
        csvContent += Number(i.firstChild.textContent) + "," + i.children[1].textContent + "," + i.children[2].textContent + "\n"
    }
    if (csvContent === "") return
    console.log(csvContent)
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;'})
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url); link.setAttribute('download', 'data.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link); link.click(); document.body.removeChild(link)
}
