// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('new-task-input').value;
    if (taskInput.trim() !== '') {
        var taskList = document.getElementById('tasks');

        // Create task container
        var taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        // Create task content
        var taskContent = document.createElement('div');
        taskContent.classList.add('content');
        var taskText = document.createElement('input');
        taskText.type = 'text';
        taskText.classList.add('text');
        taskText.value = taskInput;
        taskText.readOnly = true;
        taskContent.appendChild(taskText);

        // Create task actions
        var taskActions = document.createElement('div');
        taskActions.classList.add('actions');
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = function() {
            editTask(taskText);
        };
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            taskList.removeChild(taskContainer);
        };
        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        // Append content and actions to task container
        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(taskActions);

        // Append task container to task list
        taskList.appendChild(taskContainer);

        // Clear input field
        document.getElementById('new-task-input').value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Function to edit a task
function editTask(taskText) {
    taskText.readOnly = false;
    taskText.focus();
    taskText.addEventListener('blur', function() {
        taskText.readOnly = true;
    });
}

// Add event listener to input field to add task on Enter key press
document.getElementById('new-task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); // Prevent form submission
    }
});
