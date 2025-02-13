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
  html = ``;
  html = `
        <div class= "flex justify-between items-center" id = item-${count}>
          <li class="uppercase text-green-600 item">${inputEl.value}</li> 
          <button class="bg-red-500 px-[2rem] py-[1rem] rounded-lg del-btn" data-item-name = item-${count}>Delete</button>
        </div>
    `;

  shoppingContainer.innerHTML += html;
  count++;

  inputEl.value = ``;

  // Acessing the delete btn

  const delBtns = document.querySelectorAll(`.del-btn`);

  delBtns.forEach((btn) => {
    btn.addEventListener(`click`, function (e) {
      let id = btn.dataset.itemName;
      console.log(id);
      let el = document.querySelector(`#${id}`);
      if (el) {
        el.remove();
      } else {
        console.log(`${el} does not exist!`);
      }
    });
  });
});

// Adding the search tasks functuanility

const searchItem = document.querySelector(`#search-item`);

// Adding event listener to the searchItem functuanility.

searchItem.addEventListener(`keyup`, (e) => {
  const items = document.querySelectorAll(`.item`);

  console.log(items);
  // itterating over items
  items.forEach((item) => {
    if (
      item.innerText.toLowerCase().includes(searchItem.value.toLowerCase())
    ) {
      item.parentElement.classList.remove(`hidden`);
      item.classList.remove("hidden");
      item.classList.add(`block`);
    } else {
      item.parentElement.classList.add(`hidden`);
      item.classList.remove("block");
      item.classList.add(`hidden`);
    }
  });
});
