const input = document.querySelector(".room__mission--input");
const items = document.querySelector(".room__mission--list");
const addBtn = document.querySelector(".button__upload");

function onAdd(){
  const text = input.value;

  if(text === ""){
    input.focus();
    return;
  }

  const item = createItem(text);
  items.prepend(item);
  input.value = "";
  input.focus();
}

function createItem(text){
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "missions");

  const item = document.createElement("div");
  item.setAttribute("class", "mission");

  const name = document.createElement("span");
  name.setAttribute("class", "mission__name");
  name.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.setAttribute("class", "button__mission--complete");
  completeButton.innerHTML = '<img src="img/mission__complete--gray.svg">';
  completeButton.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "button__mission--delete");
  deleteButton.innerHTML = '<img src="img/mission__delete--gray.svg">';
  deleteButton.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  item.appendChild(name);
  item.appendChild(completeButton);
  item.appendChild(deleteButton);

  itemRow.appendChild(item);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

