const table = document.querySelector("tbody");
console.log(table);

const row = document.createElement("tr")
const title = document.createElement("th");
const pages = document.createElement("th");
const read = document.createElement("th");
title.textContent = "test";
pages.textContent = "test";
read.textContent = "test";
row.appendChild(title);
row.appendChild(pages);
row.appendChild(read);
table.appendChild(row);
