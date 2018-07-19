window.onload = function() {
  const todoForm = document.getElementById('todoForm')
  const list = document.getElementById('list')

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault()

    let removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    removeButton.innerText = 'Delete'

    let updateButton = document.createElement('button')
    updateButton.classList.add('update')
    updateButton.innerHTML = 'Update'

    let value = document.getElementById('todo').value
    let el = document.createElement('span')
    let newTodo = document.createElement('li')
    el.innerText = value 
    newTodo.appendChild(el)

    list.appendChild(newTodo)
    newTodo.appendChild(removeButton)
    newTodo.appendChild(updateButton)

    todoForm.reset()
  })

  list.addEventListener('click', function(event){
    if(event.target.className === 'remove'){
      event.target.parentNode.remove()
    } else {
      document.getElementById('todo').value = event.target.previousSibling.previousSibling.innerText
      console.log(event.target.previousSibling.previousSibling)
    }
  })
}