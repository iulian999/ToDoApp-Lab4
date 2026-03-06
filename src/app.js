var currentFilter = 'all';

window.onload = function() {
  loadTodos();
  renderList();
};

function addTodo() {
  var input = document.getElementById('todoInput');
  var priority = document.getElementById('prioritySelect').value;

  if (input.value.trim() === '') {
    alert('Introduceti o sarcina!');
    input.focus();
    return;
  }

  try {
    var todo = {
      id: Date.now(),
      text: input.value.trim(),
      priority: priority,
      done: false,
      date: new Date().toLocaleDateString('ro-RO')
    };
    todos.push(todo);
    saveTodos();
    input.value = '';
    renderList();
  } catch (e) {
    console.error('Eroare la adaugarea sarcinii:', e);
    alert('A aparut o eroare. Reincercati.');
  }
}

  var todo = {
    id: Date.now(),
    text: input.value.trim(),
    priority: priority,
    done: false,
    date: new Date().toLocaleDateString('ro-RO')
  };

  todos.push(todo);
  saveTodos();
  input.value = '';
  renderList();
}

function toggleDone(id) {
  todos = todos.map(function(t) {
    if (t.id === id) t.done = !t.done;
    return t;
  });
  saveTodos();
  renderList();
}

function deleteTodo(id) {
  todos = todos.filter(function(t) { return t.id !== id; });
  saveTodos();
  renderList();
}

function filterTodos(status) {
  currentFilter = status;
  renderList();
}

function renderList() {
  var list = document.getElementById('todoList');
  var filtered = filterByStatus(currentFilter);
  list.innerHTML = '';

  filtered.forEach(function(todo) {
    var li = document.createElement('li');
    li.className = 'priority-' + todo.priority + (todo.done ? ' done' : '');
    li.innerHTML = '<span>' + todo.text + ' (' + todo.date + ')</span>' +
      '<div>' +
      '<button onclick="toggleDone(' + todo.id + ')">' + (todo.done ? 'Anuleaza' : 'Finalizat') + '</button>' +
      '<button onclick="deleteTodo(' + todo.id + ')">Sterge</button>' +
      '</div>';
    list.appendChild(li);
  });
}