/* const firstDiv = document.querySelector("body > div");

const addButton = document.createElement("button");
addButton.type = "button";
addButton.classList.add("button");
addButton.textContent = "Add to list";

firstDiv.appendChild(addButton);

const oList = document.createElement("ol");
oList.classList.add("ordered-list");


firstDiv.appendChild(oList);
 */

const addButton = document.getElementById("task-button");

const liMaker = function () {
  const input = document.getElementById("task-input");
  const inputValue = input.value;
  if (inputValue !== "") {
    const li = document.createElement("li");
    li.innerText = inputValue;
    const delButton = document.createElement("button");
    delButton.classList.add("task-delete");
    delButton.innerText = "❌";
    delButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(delButton);
    li.addEventListener("click", function () {
      li.classList.toggle("strike");
    });
    const ol = document.getElementById("task-list");
    ol.appendChild(li);
  } else {
    alert("Devi inserire del testo!");
    input.focus(); //con questo forzo l'ingresso nell'input!
  }
};

addButton.addEventListener("click", liMaker);
