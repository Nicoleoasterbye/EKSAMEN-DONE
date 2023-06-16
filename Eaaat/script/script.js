const cart = [];

function addToCart(productName) {
  cart.push(productName);
}

function showCart() {
  const cartItemsElement = document.getElementById('cartItems');
  const cartListElement = document.getElementById('cartList');
  const payButtonElement = document.getElementById('payButton');

  if (cartItemsElement.style.display === 'block') {
    cartItemsElement.style.display = 'none';
  } else {
    cartItemsElement.style.display = 'block';
    cartListElement.innerHTML = '';

    if (cart.length === 0) {
      cartListElement.innerHTML = 'Din kurv er tom!';
    } else {
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartListElement.appendChild(listItem);
      });
    }

    // Show pay button when cart is not empty
    payButtonElement.style.display = cart.length > 0 ? 'block' : 'none';
  }
}

// --------side nav på mobil-------------
function openNav() {
  document.getElementById("mySidenav2").style.width = "405px";
}

function closeNav() {
  document.getElementById("mySidenav2").style.width = "0";
}

// --------------pop-up boks----------------------
function openModal(modalNumber) {
  for (let i = 1; i <= 4; i++) {
    if (i === modalNumber) {
      document.getElementById("myModal" + i).style.display = "block";
    } else {
      document.getElementById("myModal" + i).style.display = "none";
    }
  }
}

function closeModal(modalNumber) {
  document.getElementById("myModal" + modalNumber).style.display = "none";
}
// POP 2 - BILLEDER CHECKMARKED 
let selectedImages = [];

function openModal(modalNumber) {
  for (let i = 1; i <= 4; i++) {
    if (i === modalNumber) {
      document.getElementById("myModal" + i).style.display = "block";
    } else {
      document.getElementById("myModal" + i).style.display = "none";
    }
  }
}

function toggleSelection(image, name) {
  image.classList.toggle("selected");
  sessionStorage.setItem("location", name)
}

function saveSelection() {
  selectedImages = [];
  const images = document.querySelectorAll(".image-grid img.selected");
  images.forEach((image) => {
    selectedImages.push(image.alt);
  });
  console.log(selectedImages);
}

// skulle være det der skulle gemes i modal 3 - kasse 3
function saveSelection() {
  const images = document.querySelectorAll(".image-grid img.selected");
  const selectedImages = Array.from(images).map((image) => image.alt);
  const modal2Info = document.getElementById("modal2-info");
  modal2Info.textContent = selectedImages.join(", ");

  const betalingsmetodeInfo = document.getElementById("modal3-betalingsmetode-info");
  const betalingsmetodeCheckboxes = document.querySelectorAll('input[name="betalingsmetode"]:checked');
  const betalingsmetoder = Array.from(betalingsmetodeCheckboxes).map((checkbox) => checkbox.value);
  betalingsmetodeInfo.textContent = betalingsmetoder.join(", ");

  const ordrebekraeftelseInfo = document.getElementById("modal3-ordrebekraeftelse-info");
  const ordrebekraeftelseCheckboxes = document.querySelectorAll('input[name="ordrebekraeftelse"]:checked');
  const ordrebekraeftelse = Array.from(ordrebekraeftelseCheckboxes).map((checkbox) => checkbox.value);
  ordrebekraeftelseInfo.textContent = ordrebekraeftelse.join(", ");
}

// Add item to session storage 

function addToStorage(event, key) {
  sessionStorage.setItem(key,event.target.value)
}

// Get session storage item
function getItemFromStorage(item){
  sessionStorage.getItem(item); 
}

// Get all from item storage
function getAllStorage(){
  return sessionStorage;
}

console.log(sessionStorage)

document.getElementById("modal2-info").innerHTML = sessionStorage.getItem("location")