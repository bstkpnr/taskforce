
let todoList = document.getElementsByTagName('li');
for (let i = 0; i < todoList.length; i++) {
  let span = document.createElement('span');
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  todoList[i].appendChild(span);
}


let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
todoInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) liveToastBtn.click();
  });



let inputListe = document.querySelector('ul');
inputListe.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === 'li') {
      e.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let todoItemli = document.createElement("li");
  let todoInput = document.getElementById("task").value;
  let target = document.createTextNode(todoInput);
  todoItemli.appendChild(target);
  if (todoInput === "" || todoInput.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(todoItemli);
  }
  document.getElementById("task").value = "";

  let span = document.createElement('span');
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  todoItemli.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}