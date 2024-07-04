`use strict`;

// {/* <li class="uppercase text-green-600">Item</li> */}
// <button class="bg-red-500 px-[2rem] py-[1rem] rounded-lg">Delete</button>
// Adding functuanility to add and remove the items

let count = 1;
let html = ``;
const shoppingContainer = document.getElementById(`shopping-list-container`);
const inputEl = document.querySelector(`.input-items`);
const addBtn = document.getElementById(`add`);

// Adding event listener to add items in the cart

addBtn.addEventListener(`click`, (e) => {
  html += `
        <div class= "flex justify-between items-center" data-item-name = item-${count}>
          <li class="uppercase text-green-600">${inputEl.value}</li> 
          <button class="bg-red-500 px-[2rem] py-[1rem] rounded-lg" data-item-name = item-${count}>Delete</button>
        </div>
    `;

  shoppingContainer.innerHTML = html;
  count++;
});
