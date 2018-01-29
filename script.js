// selector 
// changing html content 
var h1 = $('h1');
// h1.innerHTML = 'hello world'
// h1.innerHTML

h1.html(); //html content
h1.html('hello world from javascript');
h1.on('click', function () {
  alert('hello world');
});

function hello() {
  console.log('hello world');
}

var parvez = hello;

hello();
parvez();





