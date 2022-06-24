
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = (e.target.value.toLowerCase())
    let tasks = [...liElements];
    // console.log(tasks);
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    console.log(tasks)
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
    
}

input.addEventListener('input', searchTask)




















const removeTask = (e) => {
// //    e.target.remove();
// e.target.parentNode.style.textDecoration = "line-through";
// e.target.remove();
const index = e.target.dataset.key;
console.log();
document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener
    ('click', removeTask))