// creer les tâches

function addTask() {
    let inputValue = document.getElementById("todo").value;
    let ul = document.getElementById("mytask");
    let error = document.querySelector(".error");
    if (inputValue.trim() === '') {
        error.innerHTML = `<p>La tâche ne peut pas être vide ! </p>`;
    } else {
        error.innerHTML = "";
        let li = document.createElement("li");
        li.innerHTML = `<label><input type="checkbox" onclick="taskComplete(this)"><span>${inputValue}</span></label>
         <i class="fa fa-trash"  onclick="removeTask(this)"></i>`;
        ul.insertBefore(li, ul.children[0]);
    }
    document.getElementById("todo").value = "";
}

// valider les tâches 
function taskComplete(event) {
    event.nextElementSibling.classList.toggle("complete");
}

//supprimer les tâche 

function removeTask(event) {
    event.parentElement.remove();
}