
// function create (text) {
// 	var elem = document.createElement("li");	
// 	elem.setAttribute("class", "li");
// 	elem.textContent = text;
// 	one.appendChild(elem);
// 	//return elem;	
// }

// create("The first string");

var newLi = document.getElementById("new");
var addLi = document.getElementById("add");
var newBtn = document.querySelector("#new input");
var addBtn = document.querySelector("#add input[type='button']");


var input = document.getElementById("text");
var ul = document.getElementById("notes");
var form = document.getElementById("myform");

newBtn.onclick = changeStyle; 
addBtn.onclick = createNote;

function changeStyle() {
	newLi.classList.toggle("hide");
	addLi.classList.toggle("hide");
}

function createNote(){
	if(input.value){
		var text = input.value;
		console.log(text);
		addNote(text, ul);
		changeStyle();
	}
}

function addNote(text, parent) {
	var li = document.createElement("li");
	li.setAttribute("class", "li");
	var deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.onclick = function(e) {////////////////// e - объект события, target - свойство
		var curBtn = e.target;
		var currLi = curBtn.parentNode;
		parent.removeChild(currLi);
	}
	deleteBtn.setAttribute("class", "delete");
	li.textContent = text;
	li.appendChild(deleteBtn);
	parent.appendChild(li);
	notes.appendChild(li);
}

form.onsubmit = function(e) {
	e.preventDefault();
	createNote();
}

