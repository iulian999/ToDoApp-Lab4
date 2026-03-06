var todos = [];

function saveTodos() {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Eroare la salvare:', e);
  }
}

function loadTodos() {
  try {
    var data = localStorage.getItem('todos');
    todos = data ? JSON.parse(data) : [];
  } catch (e) {
    todos = [];
  }
}

function filterByStatus(status) {
  if (status === 'all') return todos;
  if (status === 'active') return todos.filter(function(t) {
    return !t.done && t.text.trim() !== '';
  });
  if (status === 'done') return todos.filter(function(t) {
    return t.done === true;
  });
  return todos;
}