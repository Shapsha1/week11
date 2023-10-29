const taskInput = document.querySelector("#task_input");
const button = document.querySelector("#add_button");
const list = document.querySelector(".list");
const addTask = () => {
    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    list.append(newTask);
    taskInput.value = "";
};
button.addEventListener("click", addTask);
list.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("done");
    }
});
const focusedInput = () => {
    taskInput.placeholder = "";
};
const bluredInput = () => {
    taskInput.placeholder = "Новая задача";
};
taskInput.addEventListener("focus", focusedInput);
taskInput.addEventListener("blur", bluredInput);
