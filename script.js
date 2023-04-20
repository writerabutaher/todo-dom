const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
};

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"))

    const inputText = getElement("todo-text").value;
    inputText.value = "";

    if (!todos) {
        const todoList = [
            {
                title: inputText,
                complete: false
            }
        ]
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else {
        const todoList = [
            ...todos,
            {
                title: inputText,
                complete: false
            }
        ]
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    render();
}

const render = () => {

    const todos = JSON.parse(localStorage.getItem("TODOS"))

    const ul = getElement("todo-list");

    ul.innerHTML = ``;

    todos.map(item => {

        const list = document.createElement("li");

        list.classList.add("p-2");

        list.innerText = item.title;

        ul.appendChild(list)
    });
};

const handleClear = () => {
    localStorage.removeItem("TODOS");
    render()
}

render();