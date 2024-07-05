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
          <li class="uppercase text-green-600">${inputEl.value}</li> 
          <button class="bg-red-500 px-[2rem] py-[1rem] rounded-lg del-btn" data-item-name = item-${count}>Delete</button>
        </div>
    `;

  shoppingContainer.innerHTML += html;
  count++;

  inputEl.value = ``;

  // Acessing the delete btn

  const delBtns = document.querySelectorAll(`.del-btn`);
  
  delBtns.forEach((btn)=>{
    btn.addEventListener(`click`,function(e){
      let id = btn.dataset.itemName;
      console.log(id);
      let el = document.querySelector(`#${id}`);
      if(el){
        el.remove();
      }
      else{
        console.log(`${el} does not exist!`);
      }
    })
  })
});
