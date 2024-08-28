const firstDiv = document.querySelector("body > div");

const addButton = document.createElement("button");
addButton.type = "button";
addButton.classList.add("button");
addButton.textContent = "Add to list";

firstDiv.appendChild(addButton);

const oList = document.createElement("ol");
oList.classList.add("ordered-list");
oList.innerText = "To do list";

firstDiv.appendChild(oList);

const pushText = function () {};
