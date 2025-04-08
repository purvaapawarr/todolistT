function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task === '') return;
  
    const taskList = document.getElementById('taskList');
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="this.parentElement.remove()">Delete</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }
  