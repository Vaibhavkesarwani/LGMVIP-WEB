let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ol");
let lis = document.querySelectorAll("li");
let listsize = lis.length;
let count=0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	if(count<20){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		li.appendChild(btn);
		count++;
	}
	else{
		alert("Your To Do List is Full");
		input.value="";
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deletelist(event) {
	if(event.target.tagName === "BUTTON"){
		event.target.parentNode.remove();
		count--;
	}
}

function donelist(event) {
	event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",deletelist);

ul.addEventListener("click",donelist);