let btnAddTaskEl = document.querySelector('button');
let taskNameEl = document.querySelector('#content');

let tasks = getTaskFromLocalStorage();
renderTask(tasks);

btnAddTaskEl.addEventListener('click', function() {
    if (!taskNameEl.value) {
        alert('Please enter the task name.');
        return false;
    }

    let taskID = this.getAttribute('id');
    let tasks = getTaskFromLocalStorage();
    let task = { name: taskNameEl.value, done: false }; // Thêm trường done với giá trị mặc định là false

    if (taskID == 0 || taskID) {
        tasks[taskID] = task;
        this.removeAttribute('id');
    } else {
        tasks.push(task);
    }
    taskNameEl.value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTask(tasks);
});

function editTask(id) {
    let tasks = getTaskFromLocalStorage();

    if (tasks.length > 0) {
        taskNameEl.value = tasks[id].name;
        btnAddTaskEl.setAttribute('id', id);
    }
}

function deleteTask(id) {
    if (confirm('Do you want to delete?')) {
        let tasks = getTaskFromLocalStorage();
        tasks.splice(id, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTask(getTaskFromLocalStorage());
    }
}

function toggleTaskStatus(id) {
    let tasks = getTaskFromLocalStorage();
    tasks[id].done = !tasks[id].done;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTask(tasks);
}

function renderTask(tasks = []) {
    let content = '<ul>';

    tasks.forEach((task, index) => {
        content +=  `<li>
            <div class="task-name ${task.done ? 'done' : ''}">${task.name}</div>
            <a href="#" onclick="editTask(${index})">Edit</a>
            <a href="#" onclick="deleteTask(${index})" confirm>Delete</a>
            <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleTaskStatus(${index})"> Done
        </li>`;
    });

    content += '</ul>';

    document.querySelector('#result').innerHTML = content;
}

function getTaskFromLocalStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
