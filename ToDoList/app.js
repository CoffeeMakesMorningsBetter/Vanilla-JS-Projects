window.onload = function () {
  const todoForm = document.getElementById('todoForm')
  const list = document.getElementById('list')
  let count = 0
  let status = false
  let updateID = null;
  let allIDs = list.querySelectorAll('*[id]')
  let char = Array.from(allIDs).map(obj => obj.id)

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault()

    if (char.includes(updateID) && status === true) {

      let update = document.getElementById('todo').value
      document.getElementById(updateID).firstChild.innerText = update
      todoForm.reset()
      updateID = null
      
    } else {

      let removeButton = document.createElement('button')
      removeButton.classList.add('remove')
      removeButton.innerText = 'Delete'

      let updateButton = document.createElement('button')
      updateButton.classList.add('update')
      updateButton.innerHTML = 'Update'


      let value = document.getElementById('todo').value
      let el = document.createElement('span')
      let newTodo = document.createElement('li')
      newTodo.setAttribute('id', count)
      el.innerText = value
      newTodo.appendChild(el)
      count++


      list.appendChild(newTodo)
      newTodo.appendChild(removeButton)
      newTodo.appendChild(updateButton)

      todoForm.reset()

      status = true
      allIDs = list.querySelectorAll('*[id]')
      char = Array.from(allIDs).map(obj => obj.id)

    }
  })

  list.addEventListener('click', function (event) {
    if (event.target.className === 'remove') {
      event.target.parentNode.remove()
    } else {
      document.getElementById('todo').value = event.target.previousSibling.previousSibling.innerText
      updateID = event.target.parentNode.id
    }
  })
}