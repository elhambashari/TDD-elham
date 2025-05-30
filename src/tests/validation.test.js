import { isCartItem, isProduct } from "../validation.js"

const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation', () => {

	test('om det finns en riktig cartitem return true',()=>{
		expect(isCartItem({
	id: 2001,
	amount: 1,
	item: exampleProduct
}
)).toBe(true)
	})



	test('om det finns fel cartitem  return false',()=>{
		expect(isCartItem({id:1,amount:1})).toBe(false)
	})


	test('om type är fel return false',()=>{
		expect(isCartItem({id:"elham",amount:"hej",item:null})).toBe(false)
	})


   test('return true för ett giltigt cart-objekt', () => {
   expect(isCartItem(exampleCartObject)).toBe(true);
  });





	test('om det är en riktig produkt return true',()=>{
		expect(isProduct(exampleProduct)).toBe(true)
	})

	test('om det finns en fel produkt return false',()=>{
		expect(isProduct({id:1001,price:500})).toBe(false)
	})

	test('om det finns en fel produkt med fel type return false',()=>{
		expect(isProduct({id:"elham",name:"hej",price:"hejdå"})).toBe(false)
	})




})
