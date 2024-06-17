document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        
        taskInput.value = '';
    }
});