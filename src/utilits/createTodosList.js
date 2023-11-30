export const createTodosList =(todos,todosList)=>{
    todosList.innerHTML = ''
    todosList.className = 'todos-list'
    if(todos.length>0){
        todos.forEach((todo)=>{
            const todoElement = document.createElement('div')
            todoElement.id = todo.id
            todoElement.className = 'todo-item'
            const todoText = document.createElement('p')
            todoText.textContent = todo.text
            todoElement.append(todoText)
            todosList.append(todoElement)
        })
        return todosList
    } else{
        return todosList
    }
    }
    