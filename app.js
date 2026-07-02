const addBtn = document.querySelector("#add-btn");
const firstMessage = document.querySelector("p");
let count = 0;

if (count === 0) firstMessage.textContent = "Win a cookie";


addBtn.addEventListener("click", () => {
    count++;
    firstMessage.textContent = `You won ${count} cookies`;
});