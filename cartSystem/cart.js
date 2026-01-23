const cart = []

const products = [
  { id: 1,  name: "Tomato",           stock: 26, price: 200, img: "tomato.webp" },
  { id: 2,  name: "Potato",           stock: 40, price: 150, img: "potato.webp" },
  { id: 3,  name: "Onion",            stock: 35, price: 180, img: "onion.webp" },
  { id: 4,  name: "Carrot",           stock: 20, price: 120, img: "carrot.webp" },
  { id: 5,  name: "Cabbage",          stock: 15, price: 90,  img: "cabbage.webp" },
  { id: 6,  name: "Bell Pepper",      stock: 18, price: 250, img: "bell_pepper.webp" },
  { id: 7,  name: "Spinach",          stock: 30, price: 80,  img: "spinach.webp" },
  { id: 8,  name: "Broccoli",         stock: 22, price: 220, img: "broccoli.webp" },
  { id: 9,  name: "Cucumber",         stock: 28, price: 130, img: "cucumber.webp" },
  { id: 10, name: "Lettuce",          stock: 16, price: 110, img: "lettuce.webp" },
  { id: 11, name: "Apple",            stock: 50, price: 300, img: "apple.webp" },
  { id: 12, name: "Banana",           stock: 60, price: 120, img: "banana.webp" },
  { id: 13, name: "Orange",           stock: 45, price: 250, img: "orange.webp" },
  { id: 14, name: "Mango",            stock: 20, price: 400, img: "mango.webp" },
  { id: 15, name: "Strawberry",       stock: 25, price: 350, img: "strawberry.webp" },
  { id: 16, name: "Blueberry",        stock: 18, price: 500, img: "blueberry.webp" },
  { id: 17, name: "Grapes",           stock: 40, price: 280, img: "grapes.webp" },
  { id: 18, name: "Watermelon",       stock: 12, price: 600, img: "watermelon.webp" },
  { id: 19, name: "Pineapple",        stock: 10, price: 450, img: "pineapple.webp" },
  { id: 20, name: "Papaya",           stock: 15, price: 350, img: "papaya.webp" }
];

function displayProducts() {



    products.forEach((product) => displayProduct(product))

}



function displayProduct(product) {

    const divCard = document.createElement("div")
    divCard.classList.add("card")

    const mainImg = document.createElement("img")
    mainImg.src = product.img
    mainImg.alt = product.name
    mainImg.classList.add("mainImg")

    const divName = document.createElement("div")

    const titleH = document.createElement("h3")
    titleH.textContent = product.name

    divName.appendChild(titleH)

    const divMeta = document.createElement("div")
    divMeta.classList.add("metadata")

    const metaPrice = document.createElement("h4")
    metaPrice.textContent = "Price : " + product.price
    const metaStock = document.createElement("h4")
    metaStock.textContent = "Stock : " + product.stock

    divMeta.append(metaPrice, metaStock)

    const divBtn = document.createElement("div")
    divBtn.classList.add("buy-btn")

    const inputQuantity = document.createElement("input")
    inputQuantity.type = "number"
    inputQuantity.name = "quantity"
    inputQuantity.id = `quantity-${product.id}`
    inputQuantity.placeholder = "Enter no of product"

    const addBtn = document.createElement("button")
    addBtn.type = "button"
    addBtn.textContent = "Add to cart"

    addBtn.addEventListener("click", (e) => { addToCart(e, product) })

    divBtn.append(inputQuantity, addBtn)

    divCard.append(mainImg, divName, divMeta, divBtn)

    const container = document.querySelector(".container")
    container.appendChild(divCard)


}

function addToCart(e, product) {
    const inputQty = document.getElementById(`quantity-${product.id}`)
    const quantity = Number(inputQty.value)

    if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity")
        return
    }
    if (quantity > product.stock) {
        alert("Not enough stock");
        return;
    }

    const index = cart.findIndex(
        item => item.productId === product.id
    )

    const button = e.target

    inputQty.disabled = index === -1 ? true : false

    if (index === -1) {
        cart.push({
            productId: product.id,
            quantity: quantity,
            price: product.price
        })

        button.classList.add("cart-added")
        button.textContent = "Remove from cart"
    }


    else {
        cart.splice(index, 1)

        button.classList.remove("cart-added")
        button.textContent = "Add to cart"
        inputQty.value = ""
    }


    calculateTotal()

    console.log(cart)
}

function calculateTotal() {
    const outputTotal = document.querySelector(".header span")
    let total = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
    outputTotal.textContent = "Total : " + total + "$"
}


displayProducts();

