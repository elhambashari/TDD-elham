

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här


function getCartItemCount() {
	return cart.reduce((total,item)=>total+item.amount,0)
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}

function getItem(index){
	return cart[index]
}

function getTotalCartValue(){
	return cart.reduce((total,item)=>total+item.item.price* item.amount,0)
}


function removeFromCart(itemId){
	cart= cart.filter(item=>item.id!== item.id)
}



function editCart(itemId, newValues) {
	const item = cart.find(item => item.id === itemId)
	if (!item) return

	Object.assign(item, newValues)
}









function clearCart(){
	cart=[]
	idCounter=2002
}

export { getCartItemCount, addToCart,getItem ,clearCart,getTotalCartValue,removeFromCart,editCart}
