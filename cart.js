let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Product added to cart")

}
