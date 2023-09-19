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
}
document.addEventListener('click', (e) => {
    const el = e.target;
    (el.classList.contains('delete'))? res.removeChild(el.parentNode) : '';
});
