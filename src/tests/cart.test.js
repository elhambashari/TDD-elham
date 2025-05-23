
import { addToCart, getCartItemCount,getItem,clearCart,getTotalCartValue } from "../cart"


const sampleProduct = { id:1001, name: "Vattenpistol", price: 40 }
const anotherProduct = { id:1002, name: "Badanka", price: 100 }
describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})


test('getitem return true',()=>{
      addToCart(sampleProduct);
	  const item = getItem(0)
	  expect(item.item.name).toBe("Vattenpistol")
})



test('get total all kundvarg item',()=>{
	addToCart(sampleProduct)
	addToCart(anotherProduct)
		expect(getTotalCartValue(cart)).toBe(140)
	
})

	
	
})
