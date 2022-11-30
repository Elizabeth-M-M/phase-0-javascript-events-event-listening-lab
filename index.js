let input;

function addingEventListener() {
    input = document.getElementById('input');
    input.addEventListener('click', ()=> alert('I was clicked!'));
    
}
console.log(addingEventListener())

