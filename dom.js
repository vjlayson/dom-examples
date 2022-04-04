// HTML file: dom-examples.html

// April 4, 2022 (Monday) - Morning Class

// Goal: div "reg-div" walang display sa una
// Topic: .display = "none", .display = "block"
var element = document.getElementById("reg-div");
element.style.display = "none";

// Goal: Lalabas ung div if click Button to Register

// Goal: if nakashow div, press button to hide. Vice versa
// Topic: .classList.toggle()
var btnRegister = document.getElementById("btn-register");
btnRegister.addEventListener("click",() => {
    if(element.style.display == "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
    element.classList.toggle("boxform");
});
// other classList methods: add, remove

// Hide Text, Show Text
var p = document.getElementById("para");
var btnHide = document.getElementById("btn-hide");
var btnShow = document.getElementById("btn-show");

btnHide.addEventListener("click",() => {
    p.style.display = "none";
});
btnShow.addEventListener("click",() => {
    p.style.display = "block";
});

// Creating a new node
// Topic: .createElement(), .textContent
const menu = document.getElementById("menu");
let menus = ["Home", "About Us", "Contact Us", "Blog", "Videos"];

function createMenuItem(item) {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
};

// menu.appendChild(createMenuItem("Home"));
// menu.appendChild(createMenuItem("About Us"));
// menu.appendChild(createMenuItem("Contact Us"));


// Goal: What if may Array ng strings, we want na ma-display yun
// A coding challenge

// Try creating new Function 
// Or maybe For Loop

// For Loop Solution
for(i=0; i<menus.length; i++){
    menu.appendChild(createMenuItem(menus[i]))
};

// OTHER SOLUTIONS

// .forEach() Solution
// menus.forEach((items) => {
//     menu.appendChild(createMenuItem(items))
// });

// For...In Solution, returns index
// for(items in menus){
//     menu.appendChild(createMenuItem(menus[items]))
// };

// For...Of Solution
// for(items of menus){
//     menu.appendChild(createMenuItem(items))
// };

// Lunch Break //

// Goal: Add fruit to the List of fruits

// Creating a new node
// Topic: .createElement(), .textContent


// 
let fruitList = document.getElementById("fruits")
let btnAdd = document.getElementById("btn-fruit")
let moreFruits = ["Bayabas", "Santol", "Ubas", "Melon"]

function addFruitItem(item) {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
};

// static code
// btnAdd.addEventListener("click", () =>{
//     fruitList.appendChild(addFruitItem("lemon"))
// });


// Dynamic code
btnAdd.addEventListener("click", () =>{
    const input = prompt(`enter a fruit`);
    fruitList.appendChild(addFruitItem(input));
});

// Displaying values from Text & Number Fields
let btnFruits = document.getElementById("btnFruits");

btnFruits.addEventListener("click", () =>{
    const newPrutas = document.getElementById("prutas");
    const newQuanity = document.getElementById("quantity");
    fruitList.appendChild(addFruitItem(newPrutas.value + " is " + newQuanity.value));
});

//
let myselect = document.getElementById("myselect");
let btnjs = document.getElementById("btn-js");

// outputs the index of an item
btnjs.addEventListener("click",() =>{
    alert(myselect.selectedIndex)
})

// outputs the selected index and value
let btnjs2 = document.getElementById("btn-js2");
btnjs2.addEventListener("click", () =>{
    console.log(`Index: ${myselect.selectedIndex} is ${myselect.value}`);
    // another way to output
    // minsan iba value sa text
    let i = myselect.selectedIndex;
    let item = myselect[i].textContent;
    console.log(`Index is: ${i} ${item}`);
});

// Sample: Select multiple options in Select Tag Using for...of loop
let progList = document.querySelector("#prog");
let submit1 = document.querySelector("#submit1");

submit1.addEventListener("click", () =>{
    let arr1=[]
    for(item of progList.options){
        if(item.selected){
            arr1.push(item.value)
        }
    }
    alert(`You selected: ${arr1}`)
});

// Sample: Select using query selector all
//  Topic: option:checked
let submit2 = document.getElementById("submit2")
submit2.addEventListener("click", () =>{
    let progList2 = document.querySelectorAll("#prog option:checked") //will ouput node list
    let mapProg = [...progList2].map((option) => option.value)   //spread operator or syntax "..."
    console.log(mapProg)
});

//