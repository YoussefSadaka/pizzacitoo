const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.about-text',{delay:200, origin:'left'});
sr.reveal('.chef-text',{delay:200, origin:'left'});
sr.reveal('.menu, .contact',{delay:200, origin:'bottom'});



// ===

let items = [];
let totalPrice = 0;

function openModal() {
    document.getElementById('orderModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function addItem() {
    const itemName = prompt('pizza name ?');
    const itemPrice = parseFloat(prompt('price :'));

    if (itemName && !isNaN(itemPrice)) {
        items.push({ name: itemName, price: itemPrice });
        updateItemList();
    } else {
        alert('please enter right information');
    }
}

function updateItemList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
        itemList.appendChild(itemElement);
    });

    updateTotalPrice();
}

function updateTotalPrice() {
    totalPrice = items.reduce((total, item) => total + item.price, 0);
    document.getElementById('totalPrice').innerHTML = `total :${totalPrice.toFixed(2)}EGY`;
}
