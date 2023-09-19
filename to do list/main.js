const addButton = document.querySelector('.addTask')
const res = document.querySelector('.res')
let inputTarefa;

document.addEventListener('keydown', (e)=> {
    (e.key === 'Enter')? exec(): '';
});

addButton.addEventListener('click', () => {
    exec();
});

function exec() {
    inputTarefa = document.querySelector('#tarefa').value;
    const task = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Apagar';

    task.innerHTML += inputTarefa; // Define  conteúdo
    task.appendChild(deleteButton); // Add o botão ao task

    deleteButton.addEventListener('click', () => {
        res.removeChild(task);
    });
    
    clearInput();
    mostrarResul(task); 
    
}
function clearInput() {
    inputTarefa.value = ''; 
}
function mostrarResul(task) {
    res.appendChild(task);
}

//apagar input quando função comecar
//clearInput(inputTarefa);
//varias funções
