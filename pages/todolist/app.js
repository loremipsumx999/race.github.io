let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    //Tárolja az input mező értékét a taskText változóban. Trim() eltávolítja előtte/utána a fölösleges szóközöket (üres hely)
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        tasks.push(taskText);
        taskInput.value = '';
        renderTask();
    } else{
        alert('Kérlek add meg a feladatot!');
    }
}

function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) =>{
        const li = document.createElement('li');
        li.textContent = task;

        const editButton = document.createElement('button');
        editButton.textContent = 'Szerkesztés';
        editButton.onclick = () => editTask(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Törlés';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li)
    });
}

function editTask(index){
    const newTaskText = prompt('Add meg az új feladatot');
    if(newTaskText != null){
        tasks[index] = newTaskText;
        renderTask();
    }
}

function deleteTask(index){
    if(confirm('Biztosan törölni szeretné-e ezt a feladatot?')){
        //Splice() aminek az a lényege, hogy megadjuk az index paraméterét, és utána megadjuk hgoy csak 1 elemet töröljön
        tasks.splice(index, 1);
        renderTask();
    }
}

//window.onload ez egy eseménykezelő amely akkor fut le, ha az összes tartalom betöltődött a HTML oldalon, beleértve az összes tartalmat (kép, stíluslapok stb stb.)
//Hozzárendelt függvény (renderTask) is le fog futni
window.onload = renderTask