
import { addToCart, getCartItemCount,getItem,clearCart,getTotalCartValue,removeFromCart,editCart } from "../cart"


const sampleProduct = { id:1001, name: "Vattenpistol", price: 40 }
const anotherProduct = { id:1002, name: "Badanka", price: 500 }
describe('Cart', () => {
	
	beforeEach(() => {
	
		clearCart()
	})


	// Skriv dina testfall här

test('getcartitemcount return true',()=>{
	addToCart(sampleProduct)
	addToCart(anotherProduct)
	const count= getCartItemCount()
	expect(count).toBe(2)
})


test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }
		addToCart(input)
		const itemCountAfter = getCartItemCount()
		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})




test('getitem return true',()=>{
      addToCart(sampleProduct);
	  const item = getItem(0)
	  expect(item.item.name).toBe("Vattenpistol")
       expect(item.item.price).toBe(40)
})



test('get totalpris för all kundvarg item',()=>{
	addToCart(sampleProduct)
	addToCart(anotherProduct)
	expect(getTotalCartValue()).toBe(540)
	
})


test('ta bort item från varukorg',()=>{
	addToCart(sampleProduct)
	const item = getItem(0);
	removeFromCart(item.id)
	expect(getCartItemCount()).toBe(0)
})


test('ändra antal item(edit)',()=>{
	addToCart(sampleProduct)
	const item= getItem(0)
	editCart(item.id,{amount:4})
	const update= getItem(0)
	expect(update.amount).toBe(4)
	expect(item.item.name).toBe("Vattenpistol")
})
	


test('rensa varukorg',()=>{
	addToCart(sampleProduct)
	addToCart(anotherProduct)
	expect(getCartItemCount()).toBe(2)
	clearCart()
	expect(getCartItemCount()).toBe(0)
})
	
})
