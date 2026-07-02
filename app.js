const addBtn = document.querySelector("#add-btn");
const countMessage = document.querySelector("#count");
let count = 0;

addBtn.addEventListener("click", () => {
    count++
    countMessage.textContent = count;
});