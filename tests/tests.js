// Teste simple pentru functiile principale

function assertEqual(a, b, msg) {
  if (a === b) {
    console.log('PASS: ' + msg);
  } else {
    console.error('FAIL: ' + msg + ' | Asteptat: ' + b + ' | Primit: ' + a);
  }
}

// Test 1: filterByStatus - all
todos = [{id:1, text:'Task1', done:false}, {id:2, text:'Task2', done:true}];
var result = filterByStatus('all');
assertEqual(result.length, 2, 'filterByStatus all returneaza toate');

// Test 2: filterByStatus - active
result = filterByStatus('active');
assertEqual(result.length, 1, 'filterByStatus active returneaza doar nefinalizate');

// Test 3: filterByStatus - done
result = filterByStatus('done');
assertEqual(result.length, 1, 'filterByStatus done returneaza doar finalizate');

console.log('Toate testele au rulat.');