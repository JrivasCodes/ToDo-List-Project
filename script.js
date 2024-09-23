const toDoInput = document.querySelector(".input-field")
const toDoButton = document.querySelector(".add-btn")
const toDoList = document.querySelector(".todo-list")
const clearAll = document.querySelector("#clear-btn")


toDoButton.addEventListener("click", addToList)
clearAll.addEventListener("click", clearList)


function addToList (event){
    event.preventDefault();

    const task = toDoInput.value

    let newList = document.createElement("li");
    newList.textContent = task
    
    toDoList.appendChild(newList);
    toDoInput.value = ""
    console.log(task)

    newList.addEventListener("click", deleteSingleLi)

    function deleteSingleLi(event){
        event.target.remove()
    }
}

function clearList (event){
    toDoList.innerHTML = ""
}