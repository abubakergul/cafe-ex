"use strict";
const beefBurger = {
  img: "images/beef-burger.jpg",
  itemName: "beef-burger",
  itemPrice: 1.0,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Sandwitches",
};
const chickenBurger = {
  img: "images/chicken-burger.jpg",
  itemName: "chicken-burger",
  itemPrice: 1.2,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Sandwitches",
};
const zingerBurger = {
  img: "images/zinger-burger.jpg",
  itemName: "zinger-burger",
  itemPrice: 1.5,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Sandwitches",
};
const blackcoffe = {
  img: "images/black-coffe.jpg",
  itemName: "black-coffe",
  itemPrice: 0.2,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Tea and Coffe",
};

const chai = {
  img: "images/chai.jpg",
  itemName: "chai",
  itemPrice: 0.1,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Tea and Coffe",
};

const grenntea = {
  img: "images/green-tea.jpeg",
  itemName: "green-tea",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Tea and Coffe",
};
const macchiatocoffee = {
  img: "images/macchiato-coffee.jpg",
  itemName: "macchiato-coffee",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Tea and Coffe",
};
const boiledegg = {
  img: "images/boiled-egg.jpg",
  itemName: "boiled-egg",
  itemPrice: 0.2,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Breakfast",
};

const eggsandwitch = {
  img: "images/egg-sandwitch.jpg",
  itemName: "boiled-egg",
  itemPrice: 0.4,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Breakfast",
};

const cheesesandwiche = {
  img: "images/cheese-sandwiche.jpg",
  itemName: "cheese-sandwiche",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Breakfast",
};

const halffriedegg = {
  img: "images/half-fried-egg.jpg",
  itemName: "half-fried-egg",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Breakfast",
};
const cupcake1 = {
  img: "images/cupcake-1.jpeg",
  itemName: "cupcake-1",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Cup Cake",
};
const cupcake2 = {
  img: "images/cupcake-2.jpeg",
  itemName: "cupcake-2",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Cup Cake",
};
const cupcake3 = {
  img: "images/cupcake-3.jpeg",
  itemName: "cupcake-3",
  itemPrice: 0.3,
  itemDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, tempore!",
  value: "Cup Cake",
};
const sandwatiches = [beefBurger, chickenBurger, zingerBurger];
const teaCoffe = [chai, grenntea, macchiatocoffee, blackcoffe];
const breakfast = [boiledegg, eggsandwitch, cheesesandwiche, halffriedegg];
const cupcake = [cupcake1, cupcake2, cupcake3];

const menu = [
  beefBurger,
  chickenBurger,
  zingerBurger,
  chai,
  grenntea,
  macchiatocoffee,
  blackcoffe,
  boiledegg,
  eggsandwitch,
  cheesesandwiche,
  halffriedegg,
  cupcake1,
  cupcake2,
  cupcake3,
];

const informationArrow = document.querySelectorAll(".information-arrow");
const itemDetails = document.querySelectorAll(".item-details");
const menuContainer = document.querySelector("#menu-container");
const Search = document.querySelector("#Search");
const menuItem = document.querySelector(".menu-item");
const btnFilter = document.querySelectorAll(".btn-filter");
const btnShoppingCart = document.querySelector(".shopping-cart");
const result = document.querySelector(".result");
const empt = document.querySelector(".empty");
const overlay = document.querySelector(".overlay");
const btnUser = document.querySelector(".user");
const btnLogin = document.querySelector(".btn-Login");
const email = document.querySelector(".input-Email");
const password = document.querySelector(".input-password");
let inputError = document.querySelector(".incorrect-info ");
let inputCorrect = document.querySelector(".correct-info ");

const btnCloseModal = document.querySelector(".btn-closeModal");

const displaymenu = function (menuArray) {
  menuContainer.innerHTML = "";
  menuArray.forEach((item) => {
    const HTML = `     <div class="menu-item">
    <div class="menu-image">
      <img src="${item.img}"alt="" />
    </div>
    <button class="btn-addToCart">Add to Cart</button>
    <div class="toggle-menu-item">
      <div class="information">
        <span> Item information</span>
        <span class="information-arrow rotate  ">🔽</span>
      </div>
      <div class="item-details hidden">
      <p class="item-name">${item.itemName}</p>
      <p class="item-price">Item Price:${item.itemPrice}</p>
      <p class="item-description">Item Description:${item.itemDescription}</p>
    </div>

    </div>
  </div>`;
    menuContainer.insertAdjacentHTML("afterbegin", HTML);
  });
};

window.addEventListener("DOMContentLoaded", function () {
  displaymenu(menu);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("information-arrow")) {
    const btnInformationArrow = e.target;
    let itemDetails = e.target.parentElement.parentElement.lastElementChild;
    console.log(itemDetails);

    btnInformationArrow.classList.toggle("rotate");
    itemDetails.classList.toggle("hidden");
  }
});

for (let i = 0; i < btnFilter.length; i++) {
  btnFilter[i].addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const filtermenu = menu.filter((item) => {
      if (category === item.value) return item;
    });
    if (category === "All") return displaymenu(menu);
    else return displaymenu(filtermenu);
  });
}
Search.addEventListener("keyup", function (e) {
  const searchString = e.target.value.toLocaleLowerCase();
  const filterSearch = menu.filter(function (item) {
    return item.value.toLocaleLowerCase().includes(searchString);
  });
  displaymenu(filterSearch);
});

let finditem;
let total = 0;
const displayShowCart = function () {
  //
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-addToCart")) {
    const target =
      e.target.parentElement.lastElementChild.lastElementChild.firstElementChild
        .innerHTML;
    console.log(target);
    finditem = menu.find((item) => item.itemName === target);
    console.log(finditem);
    const stringg =
      finditem.itemName + " price is " + Number(finditem.itemPrice);

    console.log(stringg);
    /////////////////////////////
    console.log("o");
    let totalElement = document.createElement("p");
    let priceElement = document.createElement("p");
    let nameElement = document.createElement("p");
    let imgElement = document.createElement("img");
    let trashElement = document.createElement("img");
    let underline = document.createElement("hr");
    let insideResult = document.createElement("div");
    //
    insideResult.className = "inside-result";
    totalElement.className = "class-total";
    trashElement.className = "trash-image";
    imgElement.className = "item-image";
    //

    imgElement.src = finditem.img;
    trashElement.src = "images/trash.png";
    console.log(imgElement);
    console.log(totalElement);
    priceElement.textContent = finditem.itemPrice;
    priceElement.textContent = Number(priceElement.textContent);
    console.log(priceElement.textContent);
    console.log();
    total = total + Number(priceElement.textContent);
    totalElement.textContent = total.toFixed(1);
    priceElement.textContent =
      "Price is: BHD " + Number(priceElement.textContent);
    console.log(totalElement.textContent);
    nameElement.textContent = `item name is: ${finditem.itemName}  `;
    insideResult.appendChild(imgElement);
    insideResult.appendChild(nameElement);
    insideResult.appendChild(priceElement);
    insideResult.appendChild(trashElement);

    result.prepend(insideResult);
    result.prepend(underline);
    empt.textContent = "Total: BHD " + totalElement.textContent;

    trashElement.addEventListener("click", function () {
      priceElement.textContent = finditem.itemPrice;
      priceElement.textContent = Number(priceElement.textContent);
      console.log(priceElement.textContent);
      console.log();
      total = total - Number(priceElement.textContent);
      console.log("remove aftter total " + total);
      totalElement.textContent = total.toFixed(1);
      empt.textContent = "Total: BHD " + totalElement.textContent;

      insideResult.remove();
      if (total <= 0) empt.textContent = "card is empty";
    });
  }
});
btnShoppingCart.addEventListener("click", function (e) {
  result.classList.toggle("hidden");
});

btnUser.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
});
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  // const email = document.querySelector(".input-Email").value;
  // const password = document.querySelector(".input-password").value;
  // const newName = [...email, "@gmail.com"];
  // console.log(newName.join(""));
  if (email.value.includes("@gmail.com") && [...password].value.length >= 6) {
    console.log("loged");
    inputError.classList.add("incorrect-hidden");
    inputCorrect.classList.remove("correct-hidden");
    email.value = "";
    password.value = "";
  } else {
    inputError.classList.remove("incorrect-hidden");
    inputCorrect.classList.add("correct-hidden");
    email.value = "";
    password.value = "";
  }
});

btnCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.add("hidden");
});
// overlay.addEventListener("click", function (e) {
//   e.preventDefault();
//   overlay.classList.add("hidden");
// });
const burgerFunction = function () {
  const nav = document.querySelector(".nav-list");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toogle");
  });
};
burgerFunction();
