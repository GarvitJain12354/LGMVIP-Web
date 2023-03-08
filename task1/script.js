const form = document.querySelector('#to-do-form');
const taskInput = document.querySelector('#input-task');
const taskList = document.querySelector('#task-list');

let tasks = [];


function renderTasks() {
	
	taskList.innerHTML = '';

	
	tasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.textContent = task;
		taskList.appendChild(li);

		const inp = document.createElement('INPUT');
		inp.setAttribute("type", "checkbox");
		inp.setAttribute("id", "checkbox");
		li.appendChild(inp);
var flag = 0
		inp.addEventListener("click",function(){
			if(flag === 0){
				li.style.textDecoration = `line-through solid black`
				deleteBtn.style.textDecoration = "none"
				flag =1
			}
			else{
				li.style.textDecoration = `none`
				deleteBtn.style.textDecoration = "none"
				flag = 0
			}
		
		})
		
		const deleteBtn = document.createElement('div');
		// deleteBtn.textContent = 'Delete';
		deleteBtn.innerHTML = `<i class="ri-close-circle-fill"></i>`
deleteBtn.setAttribute("id","del")
		li.appendChild(deleteBtn);

		
		deleteBtn.addEventListener('click', () => {
			tasks.splice(index, 1);
			renderTasks();
		});
	});
}


function addTask(event) {
	event.preventDefault();

	
	const task = taskInput.value.trim();

	
	if (task !== '') {
		tasks.push(task);
		renderTasks();
	}

	
	taskInput.value = '';
}



form.addEventListener('submit', addTask);
