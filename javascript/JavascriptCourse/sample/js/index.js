
//Util
genId = ()=>new Date().getTime()+todoar.length+'';

//Model
let todoar;
let savedData = localStorage.getItem('todos');
if(savedData) {
    savedData = JSON.parse(savedData);
    if(Array.isArray(savedData)) {
        todoar = savedData;
    } else {
        pouplateData();
    }
} else {
    pouplateData();
}

function pouplateData() {
    todoar=[];
    todoar.push({title:"Get support dish",
    date:"2022-03-12", id: genId()});
    todoar.push({title:"Get energiser",
    date:"2022-03-13", id: genId()});
    todoar.push({title:"Get Energised",
    date:"2022-03-14", id: genId()});  
    saveTodo();
}

function addTodo(data) {
    todoar.push(data);
    saveTodo();  
}

function removeTodo(id) {
    todoar = todoar.filter((data) => { return (data.id === id)? false : true});
    saveTodo();
}

function saveTodo() {
    localStorage.setItem("todos",JSON.stringify(todoar));
}



//Controller
function add() {
    data = {
        title:document.getElementById('inptid').value,
        date:document.getElementById('dtid').value,
        id: genId()};
    addTodo(data)  
    renderTodo(data);
}


function deleteTodo(event) { 
    removeTodo(event.target.id);  
    render();
}


//View

document.getElementById("count-el").innerText=1;
document.body.appendChild(document.createElement('BR'));
document.body.appendChild(document.createElement('BR'));
let prt ;
function render() {
    if (prt == undefined)
        prt = document.getElementById('tdid');
    else
        prt.innerHTML=''     
    todoar.forEach(renderTodo)
}

function renderTodo(data) {
    element = document.createElement('div');
    element.innerHTML = data.title +" : "+ data.date;
    delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.onclick = deleteTodo;
    delBtn.id = data.id;
    delBtn.style = "margin-left:10px";
    element.appendChild(delBtn);
    prt.appendChild(element);
}

render();
document.body.appendChild(document.createElement('BR'));

element = document.createElement('button');
element.innerHTML = "Click Me";
document.body.appendChild(element);

document.title="Title Change 1"