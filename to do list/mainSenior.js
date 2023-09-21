const inputTask = document.querySelector('#tarefa');
const res = document.querySelector('.res');
const buttonAddTask = document.querySelector('.addTask');

inputTask.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        if (inputTask.value !== '') {
            createTask();
        } else {
            alert('Preencha a tarefa')
        }
    }
});

buttonAddTask.addEventListener('click', () => {
    if (inputTask.value !== '') {
        createTask();
    } else {
        alert('Preencha a tarefa')
    }
});

function addTask(list) { //Criar botão e o text conttent
    list.textContent = inputTask.value;
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'Apagar'
    list.appendChild(deleteButton);
}

function createTask() {
    const list = document.createElement('li')
    res.appendChild(list)
    addTask(list);
    clearTask();
    saveTask();
}
document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('delete')) {
        res.removeChild(el.parentNode);
        saveTask();  
    } 
});

function clearTask() {
    inputTask.value = '';
    inputTask.focus();
}

function saveTask() {
    const taskList = res.querySelectorAll('li');
    const vetorTask = [];
    for (let res of taskList) {
        let taskText = res.innerText
        taskText = taskText.replace('Apagar', '').trim();
        vetorTask.push(taskText)
    }
    const vetorTaskJSON = JSON.stringify(vetorTask);
    localStorage.setItem('res', vetorTaskJSON);
}

function addSaveTask() {
    const tarefas = localStorage.getItem('res');
    const tarefasLista = JSON.parse(tarefas);

    for (let list of tarefasLista) {
        createTask(list);
    }
}
addSaveTask();